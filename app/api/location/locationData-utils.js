const getLocationsData = async () => {
  return import("./location-data.json").then((module) => module.default);
};

export { getLocationsData };
