import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";


const Search = ({apiPath}) => {

  
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath,queryTerm);

  console.log(movies);

  

  return (
    <main className='min-h-screen'>
      <div className="max-w-6xl mx-auto px-5">

      {movies?.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="my-5">No result found ({queryTerm})</div>
      )}
      </div>
    </main>
  )
}

export default Search