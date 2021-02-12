const getData = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch error ', error);
  }
};

export default getData;
