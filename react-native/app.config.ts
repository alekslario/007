import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  "name": "react-nati",
  "slug": "react-nati",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "assetBundlePatterns": ["**/*"],
  "ios": {
    "supportsTablet": true
  },
  "android": {
    "package": "com.alekslario.reactnati",
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "permissions": ["ACCESS_COARSE_LOCATION"]
  },
  "web": {
    "favicon": "./assets/favicon.png"
  }
});