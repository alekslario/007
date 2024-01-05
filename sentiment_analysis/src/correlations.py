import json
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
import pandas as pd
# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

keys = ['good', 'terrible', 'widget', 'barometer', 'moisture', 'radar', 'respiratory', 'connection', 'ui', 'graphics']
my_dict = {key: {} for key in keys}

for app_data in app_data_list:
    # Extract reviews for the current app

    app_reviews = app_data["reviews"]

    for review in app_reviews:
 
       for word in my_dict.keys():
           if word in review.get("review", "").lower():
              rating = review['rating']
              my_dict[word][rating] = my_dict[word].get(rating, 0) + 1


# Plot line chart
for key in my_dict.keys():
    myKeys = list(my_dict[key].keys())
    myKeys.sort()
    sorted_dict = {i: my_dict[key][i] for i in myKeys}
    plt.plot(sorted_dict.keys(), sorted_dict.values(), label=key,linewidth=3.5)
plt.legend()
plt.title('Correlation between words and rating of the review')
plt.xlabel('Rating')
plt.ylabel('Number of reviews with the word')
plt.show()