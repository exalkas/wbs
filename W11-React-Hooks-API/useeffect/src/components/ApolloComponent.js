import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

export default function ApolloComponent() {

    const client = new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
      });

      // gql = Graph Query Language
    client.query({
        query: gql`
                    query GetRates {
                        rates(currency: "USD") {
                            currency
                        }
                    }
                `
    }).then(result => console.log(result)); // when promise is fullfilled/ has been executed



    return(
        <ApolloProvider client={client}>
            <div>From ApolloComponent</div>
            <ExchangeRates />
        </ApolloProvider>
    )

}

const EXCHANGE_RATES = gql`
query GetExchangeRates {
    rates(currency: "USD") {
    currency
    rate
    }
}
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }

