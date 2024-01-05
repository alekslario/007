import json
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from nltk import bigrams
from nltk.corpus import stopwords
from collections import Counter
import string


mdict = {1:{}, 2:{}, 3:{}, 4:{}, 5:{}}
# Function to create bigrams from text
def create_bigrams(text):
    words = text.split()
    return ['_'.join(bigram) for bigram in bigrams(words)]

# Function to preprocess text
def preprocess_text(text):
    # Create bigrams
    bigram_tokens = create_bigrams(text)

   # Count the occurrences of each bigram
    bigram_counts = Counter(bigram_tokens)

    # Convert Counter to a dictionary
    bigram_dict = dict(bigram_counts)

    return bigram_dict

# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

all_reviews = {}  # List to store all preprocessed reviews

# Iterate through each app entry
# for app_data in app_data_list:
    
    # Extract reviews for the current app
app_reviews = app_data_list[0]["reviews"]  # app_data is already a list of reviews

# Combine all review texts into a single string
for review in app_reviews:
    rating = review["rating"];
    review = review.get("review", "")
    review = preprocess_text(review)
    mdict[rating] = Counter(mdict[rating]) + Counter(review)


# Combine all preprocessed reviews into a single string

# Generate word cloud
# for key in mdict:
#     wordcloud = WordCloud(width=800, height=400, background_color='white', collocations=False).generate_from_frequencies(mdict[key])

#     # Plot the word cloud
#     plt.figure(figsize=(12, 8))
#     plt.imshow(wordcloud, interpolation='bilinear')
#     plt.title('Word Cloud for {key} star Reviews')
#     plt.axis('off')
#     plt.show()
wordcloud = WordCloud(width=800, height=400, background_color='white', collocations=False).generate_from_frequencies(mdict[1])
# Plot the word cloud
plt.figure(figsize=(12, 8))
plt.imshow(wordcloud, interpolation='bilinear')
plt.title('Word Cloud for {key} star Reviews')
plt.axis('off')
plt.show()