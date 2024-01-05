import json
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from nltk import pos_tag, word_tokenize
from nltk.corpus import stopwords
import string

filtered_words = ['app', 'apps', 'good', 'great', 'nice', 'really', 'well', 'best', 'better', 'excellent', 'awesome', 'amazing', 'love', 'like', 'nice']

# Function to preprocess text and filter only nouns
def preprocess_text(text):
    # Tokenize the text
    tokens = word_tokenize(text)

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    tokens = [word.lower() for word in tokens if word.isalpha() and word.lower() not in stop_words and word not in string.punctuation  and word.lower() not in filtered_words]

    # Part-of-speech tagging
    tagged_tokens = pos_tag(tokens)

    # Filter out non-noun words
    noun_tokens = [word for word, pos in tagged_tokens if pos.startswith('NN')]

    return ' '.join(noun_tokens)

# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

dict = {1:"", 2:"", 3:"", 4:"", 5:""}
# Iterate through each app entry
for app_data in app_data_list:
    
    # Extract reviews for the current app
    app_reviews = app_data["reviews"]  # app_data is already a list of reviews

    # Combine all review texts into a single string
    for review in app_reviews:
        rating = review["rating"]
        dict[rating] += ' ' + review.get("review", "")

for key in dict:
    # Preprocess the reviews and filter only nouns
    preprocessed_reviews = preprocess_text(dict[key])
    
    # Generate word cloud
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(preprocessed_reviews)

    # Plot the word cloud
    plt.figure(figsize=(12, 8))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.title(f'Word Cloud for {key} star reviews (Nouns Only)')
    plt.axis('off')
    plt.show()
