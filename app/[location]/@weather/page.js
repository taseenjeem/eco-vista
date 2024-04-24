import WeatherComponent from "@/components/WeatherComponent";

const WeatherPage = ({ params, searchParams }) => {
  return (
    <WeatherComponent
      lat={searchParams?.latitude}
      long={searchParams?.longitude}
    />
  );
};

export default WeatherPage;
