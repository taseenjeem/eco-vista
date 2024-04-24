import AQIComponent from "@/components/AQIComponent";

const AQIPage = ({ params, searchParams }) => {
  return (
    <AQIComponent lat={searchParams?.latitude} long={searchParams?.longitude} />
  );
};

export default AQIPage;
