export const getLocationData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );

    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocationCoords = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getResolvedCoords = async (location, latitude, longitude) => {
  if (latitude && longitude) {
    return { latitude, longitude };
  }

  const locationCoords = await getLocationCoords(location);

  if (locationCoords.latitude && locationCoords.longitude) {
    const latitude = locationCoords.latitude;
    const longitude = locationCoords.longitude;

    return { latitude, longitude };
  }
};
