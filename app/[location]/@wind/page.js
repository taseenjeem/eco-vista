import WindComponent from "@/components/WindComponent";

const WindPage = ({ params, searchParams }) => {
  return (
    <WindComponent
      lat={searchParams?.latitude}
      long={searchParams?.longitude}
    />
  );
};

export default WindPage;
