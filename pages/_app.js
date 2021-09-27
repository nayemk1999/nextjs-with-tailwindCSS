import '../styles/globals.css'
// import '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
import _MetaData from "./_MetaData";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <_MetaData />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
