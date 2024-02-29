#!/bin/bash

## check if in docker
if [ -f /.dockerenv ] | [ -n "$(env | grep "^GITPOD")" ]; then

MAPBOX_ACCESS_TOKEN
   echo "EXPO_PUBLIC_GEOLOCATION_API=$EXPO_PUBLIC_GEOLOCATION_API" > ".env"
   echo "EXPO_PUBLIC_OPENWEATHERMAP_KEY=$EXPO_PUBLIC_OPENWEATHERMAP_KEY" > ".env"
   echo "MAPBOX_ACCESS_TOKEN=$MAPBOX_ACCESS_TOKEN" > ".env"
else
   doppler --project 007 --config dev secrets download --no-file --format env > .env
fi

webpack serve
## Delete .env on webpack exit
rm .env