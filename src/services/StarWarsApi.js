const fetchPlanets = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

export default fetchPlanets;
