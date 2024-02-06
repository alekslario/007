import "./globals.js";
import "react-native-url-polyfill/auto";
import Layout from "./components/Layout";
import { StoreProvider } from "./util/store.js";

export default function App() {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
}
