import React, { useState, useEffect } from "react";
import Card from "./Card";

const API_key = "&api_key=16b4796b594ef1aa6be150589df9c835";
const base_url = "https://api.themoviedb.org/3";

const MainMenu = () => {
  const [movieData, setData] = useState([]);
  const [url, setUrl] = useState(base_url + "/discover/movie?sort_by=popularity.desc" + API_key);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url]);

  const getData = (movieType) => {
    let newUrl = base_url + "/discover/movie" + API_key;

    switch (movieType) {
      case "Popular":
        newUrl += "&sort_by=popularity.desc";
        break;
      case "Theatre":
        newUrl += "&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
        break;
      case "Kids":
        newUrl += "&certification_country=US&certification.lte=G&sort_by=popularity.desc";
        break;
      case "Drama":
        newUrl += "&with_genres=18&primary_release_year=2014";
        break;
      case "Comedie":
        newUrl += "&with_genres=35&with_cast=23659&sort_by=revenue.desc";
        break;
      default:
        break;
    }

    setUrl(newUrl);
  };

  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      const searchUrl = base_url + "/search/movie" + API_key + "&query=" + search;
      setUrl(searchUrl);
      setSearch("");
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {["Popular", "Theatre", "Kids", "Drama", "Comedie"].map((value, pos) => (
              <li key={pos}>
                <a
                  href="#"
                  onClick={() => getData(value)}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyPress={searchMovie}
            />
            <button type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length === 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => <Card info={res} key={pos} />)
        )}
      </div>
    </>
  );
};

export default MainMenu;
