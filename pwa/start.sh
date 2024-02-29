#!/bin/bash

## check if in docker
doppler --project 007 --config dev secrets download --no-file --format env >> .env

echo "EXPO_PUBLIC_GEOLOCATION_API=$EXPO_PUBLIC_GEOLOCATION_API" >> ".env"
echo "EXPO_PUBLIC_OPENWEATHERMAP_KEY=$EXPO_PUBLIC_OPENWEATHERMAP_KEY" >> ".env"
echo "MAPBOX_ACCESS_TOKEN=$MAPBOX_ACCESS_TOKEN" >> ".env"

webpack serve
## Delete .env on webpack exit
rm .env