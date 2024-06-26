export const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OWM_API}&units=matric`
    );

    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAQIData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.OWM_API}`
    );

    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
