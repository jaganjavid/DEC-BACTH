import { useState, useEffect } from "react"
import { useNavigate,useSearchParams } from "react-router-dom"



const Search = () => {


  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();  

  const submitHandler = (e) => {

    e.preventDefault();

    if(keyword.trim()){
        navigate(`/?keyword=${keyword}`)
    }else{
        navigate("/")
    }

    setKeyword("");

  }

  let [serachParams] = useSearchParams();

    useEffect(() => {
      serachParams.has("keyword") && setKeyword(serachParams.get("keyword"));
    }, [])
  



  return (
    <form className="mb-0" onSubmit={submitHandler}>
        <div className="input-group">
        <input
            type="text"
            id="search_field"
            aria-describedby="search_btn"
            className="form-control"
            placeholder="Enter Product Name ..."
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
        <button id="search_btn" className="btn" type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>
  </form>
  )
}

export default Search