import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query"); //쿼리스트링값 가져오기

  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <div>
      <h1>검색결과</h1>u<h3>검색어 : {query}</h3>
    </div>
  );
};

export default SearchResults;
