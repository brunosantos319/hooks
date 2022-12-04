import { ApolloProvider } from "@apollo/client";
import { APIportais } from "../services/apollo-client";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={APIportais}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
