import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { options } from "../utils/Options";



const MovieDetails = () => {


  const params = useParams();

  const [data, setData] = useState({});

  console.log(params);

  const { id, original_title,overview,poster_path,genres,vote_average,vote_count} = data;

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`

  useEffect(() => {

    async function fetchMmovie() {
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);

      const responseData = await response.json();

      setData(responseData)


    }

    fetchMmovie()


  }, [])


  return (
    <main className='min-h-screen'>
      <div className="max-w-6xl mx-auto px-5">
        <section className="flex justify-around py-5 items-center flex-wrap lg:flex-nowrap">
          <div className="pr-5">
            <img className="rounded" src={image} alt={original_title} />
          </div>
          <div className="max-w-2xl">
               <h1 className="text-4xl font-bold my-3 text-center lg:text-start">{original_title}</h1>
               <p className="font-normal text-gray-700 text-center lg:text-start">{overview}</p>

               <p className="my-7 flex flex-wrap justify-center lg:justify-start gap-4">{genres ? (genres.map((genre) => (
                <span key={genre.id} className="border border-gra-gray-700 rounded p-2">
                  {genre.name}
                </span>
               ))) : null}</p>

               <div className="flex gap-3 items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fcd34d" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                 <p>{vote_average}</p>
                 <p>{vote_count} reviews</p>
               </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MovieDetails