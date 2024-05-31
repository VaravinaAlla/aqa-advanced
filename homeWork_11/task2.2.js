//async
const getHanSoloStarshipsAsync = async () => {
	fetch('https://swapi.dev/api/people/14/')
		.then((response) => response.json())
		.then(async (hanSolo) => {
			const starshipPromises = hanSolo.starships.map((starshipUrl) =>
				fetch(starshipUrl).then((response) => response.json()),
			);
			const starships = await Promise.all(starshipPromises);
			const starshipNames = starships.map((starship) => starship.name);
			console.log(starshipNames);
		})
		.catch((error) => console.error('Error fetching starships:', error));
};

getHanSoloStarshipsAsync();

//await
const getHanSoloStarshipsAwait = () => {
	fetch('https://swapi.dev/api/people/14/')
		.then((response) => response.json())
		.then((hanSolo) => {
			const starshipPromises = hanSolo.starships.map(async (starshipUrl) => {
				const response = await fetch(starshipUrl);
				return response.json();
			});

			return Promise.all(starshipPromises);
		})
		.then((starships) => {
			const starshipNames = starships.map((starship) => starship.name);
			console.log(starshipNames);
		})
		.catch((error) => console.error('Error fetching starships:', error));
};

getHanSoloStarshipsAwait();
