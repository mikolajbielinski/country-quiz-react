const fetchCountriesData = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default fetchCountriesData;
