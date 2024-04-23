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
