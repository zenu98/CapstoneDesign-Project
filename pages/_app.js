import "@/styles/globals.css";

import Layout from "@/components/UI/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
