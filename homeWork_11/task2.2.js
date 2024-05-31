const fetchResidentsAllPlanet = async () => {
  try {
    const filmResponse = await fetch("https://swapi.dev/api/films/3/");
    const film = await filmResponse.json();

    const planetPromises = film.planets.map((url) => fetch(url));
    const planetResponses = await Promise.all(planetPromises);
    const planets = await Promise.all(planetResponses.map((response) => response.json()));

    const planetResidents = await Promise.all(
      planets.map(async (planet) => {
        const residentPromises = planet.residents.map((url) => fetch(url));
        const residentResponses = await Promise.all(residentPromises);
        const residents = await Promise.all(residentResponses.map((response) => response.json()));
        const residentNames = residents.map((resident) => resident.name);
        return { planetName: planet.name, residents: residentNames };
      }),
    );

    console.log(planetResidents);
  } catch (error) {
    console.error("Error fetching residents:", error);
  }
};

fetchResidentsAllPlanet();
