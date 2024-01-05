import json
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
import pandas as pd
# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

data = []

mentionsSum={
}

reviewCount = {
}
data=[]
word = 'connection'
for app_data in app_data_list:
    # Extract reviews for the current app

    app_reviews = app_data["reviews"]

    # Count the number of reviews mentioning "ui" or "graphics"
    # reviews_with_mention = sum('ui' in review.get("review", "").lower() or 'graphics' in review.get("review", "").lower() for review in app_reviews)
    reviews_with_mention = sum( word in review.get("review", "").lower() for review in app_reviews)
    rating = app_data['rating']

    mentionsSum[rating] = mentionsSum.get(rating, 0) + reviews_with_mention
    reviewCount[rating] = reviewCount.get(rating, 0) + len(app_reviews)
# average normalized rating
for key in mentionsSum.keys():
    print(key, mentionsSum[key],reviewCount[key],mentionsSum[key]/reviewCount[key])
    mentionsSum[key] = mentionsSum[key]/reviewCount[key]



# Plot line chart
myKeys = list(mentionsSum.keys())
myKeys.sort()
sorted_dict = {i: mentionsSum[i] for i in myKeys}
plt.plot(sorted_dict.keys(), sorted_dict.values(), color='blue')
plt.title('Correlation between rating and the number of reviews with the word "' + word+'"')
plt.xlabel('Rating')
plt.ylabel('Number of Reviews with the word "' + word+'"')
plt.show()