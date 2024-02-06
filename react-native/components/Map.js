import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Map = ({ lon, lat }) => {
  return (
    <View style={{ flex: 1, width: windowWidth, height: windowHeight * 0.7 }}>
      <MapView
        style={{ flex: 1, width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: lon,
          longitude: lat,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyleId={"2416e751bcfc2010"}
        showsTraffic={false}
        showsBuildings={false}
      />
    </View>
  );
};
