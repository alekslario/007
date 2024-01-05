import json
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string
import nltk

# # Download NLTK resources
# nltk.download('punkt')
# nltk.download('stopwords')

# Function to preprocess text, keep only nouns, and filter specific words
def preprocess_text(text, filtered_words):
    # Tokenize the text
    tokens = word_tokenize(text)

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    tokens = [word.lower() for word in tokens if word.isalpha() and word.lower() not in stop_words and word not in string.punctuation]

    # POS tagging and filtering for nouns
    tagged_words = nltk.pos_tag(tokens)
    nouns = [word for word, pos in tagged_words if pos.startswith('N')]

    # Filter out specific words
    filtered_nouns = [noun for noun in nouns if noun.lower() not in filtered_words]

    return ' '.join(filtered_nouns)

# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)

dict = {1: "", 2: "", 3: "", 4: "", 5: ""}
# List of words to filter out
filtered_words = ['app','feature','data','work', 'phone', 'apps', 'weather', 'location', 'time', 'day','year',
                  'today','times','nothing','forecast','information','use','great','love','accurate'
                  ,'thank']

# Iterate through each app entry
for app_data in app_data_list:
    
    # Extract reviews for the current app
    app_reviews = app_data["reviews"]  # app_data is already a list of reviews

    # Combine all review texts into a single string
    for review in app_reviews:
        rating = review["rating"]
        dict[rating] += ' ' + review.get("review", "")

for key in dict:
    # Preprocess the reviews, keep only nouns, and filter specific words
    preprocessed_reviews = preprocess_text(dict[key], filtered_words)
    # Generate word cloud
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(preprocessed_reviews)

    # Plot the word cloud
    plt.figure(figsize=(12, 8))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.title(f'Word Cloud for {key} star reviews')  # Assuming the app title is in the first review
    plt.axis('off')
    plt.show()
