import TempComponent from "@/components/TempComponent";

const TemperaturePage = ({ params, searchParams }) => {
  return (
    <TempComponent
      lat={searchParams?.latitude}
      long={searchParams?.longitude}
    />
  );
};

export default TemperaturePage;
