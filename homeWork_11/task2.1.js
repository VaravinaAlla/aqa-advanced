const fetchHanStarships = () => {
  fetch("https://swapi.dev/api/people/14/")
    .then((response) => response.json())
    .then((hanSolo) => {
      const starshipPromises = hanSolo.starships.map((url) =>
        fetch(url).then((response) => response.json())
      );
      return Promise.all(starshipPromises);
    })
    .then((starships) => {
      const starshipNames = starships.map((starship) => starship.name);
      console.log(starshipNames);
    })
    .catch((error) => {
      console.error("Error fetching starships:", error);
    });
};

fetchHanStarships();
