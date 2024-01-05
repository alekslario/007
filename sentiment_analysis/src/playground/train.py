import numpy as np

import tensorflow as tf
from keras import models
from keras import layers
from keras.preprocessing.text import Tokenizer
from keras.utils import to_categorical
import json

def vectorize(sequences, dimension=10000):
    results = np.zeros((len(sequences), dimension))
    for i, sequence in enumerate(sequences):
        results[i, sequence] = 1
    return results

# Load your JSON data
with open('output.json', 'r',encoding='utf-8') as file:
    app = json.load(file)

app_reviews = app[0]["reviews"]  # app_data is already a list of reviews
# Extract review text and labels

# Filter reviews with a rating of 3
filtered_reviews = [review for review in app_reviews if review['rating'] != 3]
# Extract review text and labels from filtered reviews
texts = [review['review'] for review in filtered_reviews]
labels = [1 if review['rating'] > 3 else 0 for review in filtered_reviews]

# Tokenize the text data
max_words = 10000
tokenizer = Tokenizer(num_words=max_words)
tokenizer.fit_on_texts(texts)
sequences = tokenizer.texts_to_sequences(texts)

# Vectorize the text data
data = vectorize(sequences)

# Convert labels to numpy array
labels = np.asarray(labels).astype("float32")

# Split the data into training and testing sets
test_size = 200
test_data = data[:test_size]
test_labels = labels[:test_size]
train_data = data[test_size:]
train_labels = labels[test_size:]

# Define the model
model = models.Sequential()
model.add(layers.Dense(50, activation="relu", input_shape=(max_words,)))
model.add(layers.Dropout(0.3))
model.add(layers.Dense(50, activation="relu"))
model.add(layers.Dropout(0.2))
model.add(layers.Dense(50, activation="relu"))
model.add(layers.Dense(1, activation="sigmoid"))
model.summary()

# Compile the model
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# Train the model
results = model.fit(
    train_data, train_labels,
    epochs=2,
    batch_size=32,
    validation_data=(test_data, test_labels)
)
