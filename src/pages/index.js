import { useGetForecast } from "../hooks/useGetForecast";

export default function Home() {
  const { temperature, wind, humidity } = useGetForecast({
    variables: { cityLat: "-17.2225", cityLong: "-46.8752", filter: "NOW" },
    forecast: ["temperature"],
  });
  console.log("direto do index", wind, temperature, humidity);

  return <div></div>;
}
