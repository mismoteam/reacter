import { gql } from "@apollo/client";

const GQL_GET_CITY_BY_NAME = gql`
  {
    getCityByName(name: "Gothenburg") {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

export default GQL_GET_CITY_BY_NAME;
