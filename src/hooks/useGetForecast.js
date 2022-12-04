import { useQuery } from "@apollo/client";
import { forecastQuery } from "./../queries/queries_weathernow";

/* 🔥useGetForecast [1.1]🔥 
It uses parameters to generate:
Forecast Varibles: ⛈️
-> temperature
-> wind
-> humidity
-> sensation
-> precipitation

To use, first enter latitude and longitude, and also the filter which can be:
  NOW
  TODAY
  TOMORROW
  THREE_DAYS
  WEEKEND
  FIFTEEN_DAYS

  TODAY_BY_HOUR
  TOMORROW_BY_HOUR
  THREE_DAYS_BY_HOUR
  WEEKEND_BY_HOUR
  FIFTEEN_DAYS_BY_HOUR
*/

export function useGetForecast({
  variables = { cityLat, cityLong, filter: "NOW" },
  /* 👆
  When invoking the hook, provide filter, and also latitude and longitude of desired city
  If a filter is not provided in the hook call, the NOW filter will be defaulted.
  
  Example: 
  variables: { cityLat: "-17.2225", cityLong: "-46.8752", filter: "NOW" }
  */

  forecast = [],
  /*
  forecast:= List of desired variables 👆
  
  Example:
   forecast: ["temperature", "thermalSensation", "wind", "precipitation"]
  */
}) {
  const ObjectAcepptedVariablesBFF = {};
  /*
  Object that contains the variables 👆
 */

  console.log(variables);
  const { data } = useQuery(forecastQuery, {
    variables: variables,
  });
  console.log(data);
  const todo = data?.forecast.data;
  console.log(todo);

  forecast.forEach((index) => {
    switch (index) {
      case "temperature":
        // temperature switch
        if (todo) {
          const { temperature } = todo;
          ObjectAcepptedVariablesBFF.temperature =
            temperature?.data[0].average.toFixed(0) ?? "--";
        } else {
          ObjectAcepptedVariablesBFF.temperature = "--";
        }
        break;
      case "thermalSensation":
        // sensation switch
        if (todo) {
          const { thermalSensation } = todo;
          ObjectAcepptedVariablesBFF.thermalSensation =
            thermalSensation?.data[0].average.toFixed(0) ?? "--";
        } else {
          ObjectAcepptedVariablesBFF.thermalSensation = "--";
        }
        break;
      case "wind":
        // wind switch
        if (todo) {
          const { wind } = todo;
          ObjectAcepptedVariablesBFF.wind =
            wind.data[0]?.speed.toFixed(0) ?? "--";
        } else {
          ObjectAcepptedVariablesBFF.wind = "--";
        }
        break;

      case "humidity":
        // humidity switch
        if (todo) {
          const { humidity } = todo;
          ObjectAcepptedVariablesBFF.humidity =
            humidity.data[0]?.average.toFixed(0) ?? "--";
        } else {
          ObjectAcepptedVariablesBFF.humidity = "--";
        }

        break;
      case "precipitation":
        // precipitation switch
        if (todo) {
          const { precipitation } = todo;
          ObjectAcepptedVariablesBFF.precipitation =
            precipitation.data[0]?.value.toFixed(0) ?? "--";
        } else {
          ObjectAcepptedVariablesBFF.precipitation = "--";
        }
        break;
      default:
    }
  });

  console.log("objeto completo", ObjectAcepptedVariablesBFF);
  return ObjectAcepptedVariablesBFF;
}
