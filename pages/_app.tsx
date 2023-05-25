import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chain your dApp will work on.
const activeChain = "base";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={""}>
      <Head>
        <title>KINEMPUB| KINEMPUB X BASE JOURNEY NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mint your KINEMPUB X BASE JOURNEY TO MAINNET"
        />
        <meta
          name="keywords"
          content="Kinempub, base, base nft, base token, earning platform for content creators, No.1 Cryptocurrency earning platform"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
