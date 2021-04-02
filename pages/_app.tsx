import Layout from '../components/common/Layout/Layout';
import '../styles/globals.css';
import { StoreProvider } from 'easy-peasy';
import store from '../store';


function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
