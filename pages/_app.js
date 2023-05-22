import "../styles/globals.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createCache({ key: "css" });
import dynamic from "next/dynamic";
import { StoreProvider } from "../utils/Store";

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </CacheProvider>
  );
}
