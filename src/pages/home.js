import React, {useState} from 'react';
import MovieList from '../components/movielist/movielist';
import Finder from '../components/finder/finder';

const Home = (props) => {
    let [search, searchSet] = useState([]);
  const handleSearch = (movieList) => {
    searchSet(movieList);
  }

  const renderResult = () => {
    return <MovieList list={search} />
  }

  return (
    <div className="App">
      <Finder handleSearch={handleSearch} />
          {
            search.length > 0 ? 
            renderResult() :
            <p>Sin resultados</p>
          }
    </div>
  );
}
export default Home;