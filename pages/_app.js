import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position='top-right'
        hideProgressBar={true}
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
