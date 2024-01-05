import json

# Load data from JSON file with explicit encoding specification
with open('output.json', 'r', encoding='utf-8') as file:
    app_data_list = json.load(file)


# Iterate through each app entry
for app_data in app_data_list:
    # Extract reviews for the current app
    app_reviews = app_data["reviews"]  # app_data is already a list of reviews

    # Count the number of reviews mentioning "ui" or "graphics"
    reviews_with_mention = sum('ui' in review.get("review", "").lower() or 'graphics' in review.get("review", "").lower() for review in app_reviews)

    # Print the result if there are reviews with a mention
    if reviews_with_mention > 0:
        print(f"App: {app_data['title']}, stars: {app_data['rating']}, Reviews with Mention: {reviews_with_mention}")