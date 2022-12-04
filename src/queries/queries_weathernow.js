import { gql } from "@apollo/client";

export const forecastQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        precipitation {
          data {
            ... on CalculatedValue {
              date
              value
            }
          }
        }
        temperature {
          data {
            ... on CalculatedValue {
              date
              min
              max
              average
            }
          }
        }
        thermalSensation {
          data {
            ... on CalculatedValue {
              date
              value
              min
              max
              average
            }
          }
        }
        humidity {
          data {
            ... on CalculatedValue {
              date
              value
              min
              max
              average
            }
          }
        }
        wind {
          data {
            ... on CalculatedValue {
              date
              speed
              speed_min
              speed_max
              direction
              cardinal_direction
            }
          }
        }
      }
    }
  }
`;

export const temperatureQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        temperature {
          data {
            ... on CalculatedValue {
              date
              min
              max
              average
            }
          }
        }
      }
    }
  }
`;

export const windQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        wind {
          data {
            ... on CalculatedValue {
              date
              speed
              speed_min
              speed_max
              direction
              cardinal_direction
            }
          }
        }
      }
    }
  }
`;

export const humidityQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        humidity {
          data {
            ... on CalculatedValue {
              date
              value
              min
              max
              average
            }
          }
        }
      }
    }
  }
`;

export const sensationQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        thermalSensation {
          data {
            ... on CalculatedValue {
              date
              value
              min
              max
              average
            }
          }
        }
      }
    }
  }
`;
export const precipitationQuery = gql`
  query Forecast($cityLat: String!, $cityLong: String!, $filter: FilterType!) {
    forecast(
      input: {
        locale: { latitude: $cityLat, longitude: $cityLong }
        filteredBy: $filter
      }
    ) {
      data {
        precipitation {
          data {
            ... on CalculatedValue {
              date
              value
            }
          }
        }
      }
    }
  }
`;
