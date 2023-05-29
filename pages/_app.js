import { NextUIProvider } from "@nextui-org/react";
import UserNav from "../components/UserNav";
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
          <div className="navbar" style={{display:"flex", alignItems: "center", color:"inherit"}}>
            <UserNav/>
          </div>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}

export default MyApp;
