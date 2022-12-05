import { useGetForecast } from "../hooks/useGetForecast";

export default function Home() {
  const { temperature, wind, humidity, precipitation, thermalSensation } =
    useGetForecast({
      variables: {
        cityLat: "-17.2225",
        cityLong: "-46.8752",
        filter: "WEEKEND",
      },
      forecast: [
        "precipitation",
        "temperature",
        "humidity",
        "wind",
        "thermalSensation",
      ],
    });
  console.log(
    `wind: ${wind}, 
    temperature ${temperature}, 
    humidity ${humidity}, 
    precipitation ${precipitation}
    thermalSensation ${thermalSensation}
    `
  );

  return <div></div>;
}
