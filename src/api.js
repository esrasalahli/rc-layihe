const config = {
  "apiKey": "c7a5c33b",
  "apiUrl": "http://www.omdbapi.com/",
  "listUrl": "https://acb-api.algoritmika.org",
  "moviesUrl": "https://www.imdb.com/title/"
}
const save = async (request) => {
  console.log(request);
  const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error(await response.text());
};

const get = async (id) => {
  const url = new URL(id, `http://localhost:3000/favorite/${id}`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("You dont have any favourite films!");
  }
  return await response.json();
};

const getFilms = async (searchString) => {
  const url = new URL(config.apiUrl);
  url.searchParams.set("s", searchString);
  url.searchParams.set("apikey", config.apiKey);

  const response = await fetch(url.toString()).then((r) => r.json());

  if (response.Error) {
    throw new Error(response.Error);
  }

  return response;
};

const api = { save, get, getFilms };
export default api;
