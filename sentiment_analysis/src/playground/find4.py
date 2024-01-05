import json
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
import pandas as pd
# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

# # Iterate through each app entry
# for app_data in app_data_list:
#     # Extract reviews for the current app
#     app_reviews = app_data["reviews"]  # app_data is already a list of reviews

#     # Check if "ui" or "graphics" is mentioned in each review
#     for review in app_reviews:
#         if 'ui' in review.get("review", "").lower() or 'graphics' in review.get("review", "").lower():
#             print(f"App: {app_data['title']}, Rating: {review['rating']}, Review: {review['review']}")

# Iterate through each app entry

data = []
# words = ['moisture', 'radar', 'widget', 'respiratory', 'barometer']

reviews = {

}
word = 'connection'
for app_data in app_data_list:
    # Extract reviews for the current app

    app_reviews = app_data["reviews"]
    count = len(app_reviews)

    # Count the number of reviews mentioning "ui" or "graphics"
    reviews_with_mention = sum('ui' in review.get("review", "").lower() or 'graphics' in review.get("review", "").lower() for review in app_reviews)
    # reviews_with_mention = sum( word in review.get("review", "").lower() for review in app_reviews)
    ratio = reviews_with_mention / count
    reviews[app_data['title']] = ratio
 

# Plot line chart
sorted_dict = dict(sorted(reviews.items(), key=lambda item: item[1]))
plt.plot(sorted_dict.keys(), sorted_dict.values(), color='blue')
plt.xticks(rotation='vertical')
plt.title('Reviews with the word "ui" or "graphics"')
plt.xlabel('Apps')
plt.ylabel('Normalized ratio')
plt.tight_layout()
plt.show()