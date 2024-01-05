import json
from wordcloud import WordCloud
import matplotlib.pyplot as plt
# import nltk
# nltk.download()
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)


# Iterate through each app entry
for app_data in app_data_list:
    
    # Extract reviews for the current app
    app_reviews = app_data["reviews"]  # app_data is already a list of reviews

    # Combine all review texts into a single string
    all_reviews_text = ' '.join(review.get("review", "") for review in app_reviews)

    # Function to preprocess text
    def preprocess_text(text):
        # Tokenize the text
        tokens = word_tokenize(text)

        # Remove stopwords and punctuation
        stop_words = set(stopwords.words('english'))
        tokens = [word.lower() for word in tokens if word.isalpha() and word.lower() not in stop_words and word not in string.punctuation]

        return ' '.join(tokens)

    # Preprocess the reviews
    preprocessed_reviews = preprocess_text(all_reviews_text)

    # Generate word cloud
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(preprocessed_reviews)

    # Plot the word cloud
    plt.figure(figsize=(12, 8))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.title(f'Word Cloud for Reviews')  # Assuming the app title is in the first review
    plt.axis('off')
    plt.show()