const getPlanetNames = () => {
  const planetPromises = [];
  for (let i = 1; i <= 10; i++) {
    planetPromises.push(
      fetch(`https://swapi.dev/api/planets/${i}/`).then((response) =>
        response.json()
      )
    );
  }

  Promise.all(planetPromises)
    .then((planets) => {
      const planetNames = planets.map((planet) => planet.name);
      console.log(planetNames);
    })
    .catch((error) => {
      console.error("Error fetching planets:", error);
    });
};

getPlanetNames();
