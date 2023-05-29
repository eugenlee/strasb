import { NextUIProvider } from "@nextui-org/react";
import UserNav from "../components/UserNav";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>
          <div
            className="navbar"
            style={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <UserNav />
          </div>
          <Component {...pageProps} />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
