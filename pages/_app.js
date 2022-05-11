//CSS
import "../styles/globals.css";
import "../styles/main-layout.css";
//components
import Header from "../components/MainLayout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-mono flex justify-center sm:items-center sm:h-screen max-w-screen-2xl m-auto">
      <div className="main-layout-container">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
