import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UnsplashAPI from "./components/UnsplashAPI";
import Loader from "./components/Loader";
function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");

  const handleSearch = (request) => {
    setSearch(request);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Loader loading={loading} />
      <UnsplashAPI search={search} setLoading={setLoading} />
    </>
  );
}

export default App;
