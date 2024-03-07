import './globals.js';
import 'react-native-url-polyfill/auto';
import Layout from './components/Layout';
import { Provider } from 'react-redux'; // Import Provider
import { store } from './util/store.js'; // Import your Redux store
import { useLoadFonts } from './hooks/useLoadFonts.js';
//import MantineProvider

export default function App() {
  const loaded = useLoadFonts();
  return <Provider store={store}>{loaded ? <Layout /> : null}</Provider>;
}
