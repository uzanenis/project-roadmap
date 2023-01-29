import "../styles/app.scss";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Project Roadmap</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <NotificationsProvider
        withGlobalStyles
        withNormalizeCSS
        position="bottom-left"
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </NotificationsProvider>
    </>
  );
}

export default MyApp;
