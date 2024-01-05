import puppeteer from "puppeteer";
import apps from "./play_store_apps.json" assert { type: "json" };
import fs from "fs";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const filePath = "output.json";

const scrape = async (index) => {
  let data = [];
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    slowMo: 0,
    // args: [
    //   "--disable-gpu",
    //   "--disable-dev-shm-usage",
    //   "--disable-setuid-sandbox",
    //   "--no-first-run",
    //   "--no-sandbox",
    //   "--no-zygote",
    // ],
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  );
  await page.goto(apps[index]);
  await wait(3000);
  const appInfo = await page.evaluate(() => {
    const node = document.querySelector('[itemprop="starRating"');
    const title = document.querySelector("h1")?.innerText;
    if (!node) {
      // no reviews
      return null;
    }
    const rating = parseFloat(
      node
        .querySelector("div:first-child")
        ?.innerText?.match(/\d+\.\d+/)?.[0] || 0
    );

    const reviewNode = document.querySelector(".wVqUob div:nth-child(2)");
    let reviewNumber = parseFloat(
      reviewNode?.innerText?.match(/\d+(\.\d+)?/)?.[0] || 0
    );

    if (reviewNode?.innerText.includes("M")) {
      // test millions or thousands
      reviewNumber *= 1_000_000;
    } else if (reviewNode?.innerText.includes("K")) {
      reviewNumber *= 1_000;
    } else {
      // no reviews
      // we are not interested
      return null;
    }

    const downloads = document.querySelector(".wVqUob:nth-child(2) div");

    let downloadsNumber = parseInt(
      downloads?.innerText?.match(/\d+/)?.[0] || 0
    );
    if (!downloadsNumber) {
      // no downloads
      // we are not interested
      return null;
    }
    if (downloads?.innerText.includes("M")) {
      // test millions or thousands
      downloadsNumber *= 1_000_000;
    } else if (downloads?.innerText.includes("K")) {
      downloadsNumber *= 1_000;
    } else {
      // no downloads
      // we are not interested
      return null;
    }
    const ads = /contains ads/i.test(document.body.innerText);
    const purchases = /In-app purchases/i.test(document.body.innerText);

    return { title, rating, reviewNumber, downloadsNumber, ads, purchases };
  });

  if (!appInfo) {
    await browser.close();
    return null;
  }
  await page.click(
    '[aria-label="See more information on Ratings and reviews"]'
  );

  data = await page.evaluate(async () => {
    let oldNodes = [];
    let nodes = [];
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    do {
      const node = nodes[nodes.length - 1];
      if (node) {
        node.scrollIntoView();
      }
      await wait(3000);

      oldNodes = [...nodes];
      nodes = document.querySelectorAll(".RHo1pe");
      if (nodes.length === oldNodes.length) {
        break;
      }
    } while (nodes.length < 1000);
    const localData = [];
    //$('.RHo1pe header > div:nth-child(2) [aria-label]')
    nodes.forEach((el) => {
      const rating = el.querySelector("header > div:nth-child(2) [aria-label]");
      const dates = el.querySelectorAll("header > div:nth-child(2) span");
      const date = dates[dates.length - 1];
      const review = el.querySelector(".h3YV2d");
      const helpfulText = el.querySelector("div:nth-child(3) div")?.innerText;
      const helpful = parseInt(helpfulText?.match(/\d+/g)?.[0] || 0);
      localData.push({
        rating: parseInt(rating.ariaLabel?.match(/\d/g)[0] || 0),
        date: date?.innerText,
        review: review?.innerText,
        helpful,
      });
    });
    return localData;
  });

  await browser.close();
  appInfo.reviews = data;
  return appInfo;
};

const data = [];

for (let x = 0; x < apps.length; x++) {
  console.log(`Scraping ${x + 1} of ${apps.length}`);
  const url = apps[x];
  let app = null;
  try {
    app = await scrape(x);
  } catch (error) {}
  if (app) {
    data.push({ url, ...app });
  }
}
try {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`File '${filePath}' has been created with the array data.`);
} catch (err) {
  console.error("Error writing file:", err);
}
