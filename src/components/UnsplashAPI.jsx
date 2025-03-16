import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./loadMoreBtn";

const API_KEY = "70g0lZUS49PVNQQ69Yw_gterSWQjLehn_kWYtrbaUxQ";

export default function UnsplashAPI({ search, setLoading, onImageClick }) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoadingState] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!search) {
      return;
    }
    const URL = `https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${API_KEY}`;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(URL);
        setResponse((prevResponse) => [
          ...prevResponse,
          ...response.data.results,
        ]);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
        setLoadingState(false);
      }
    }
    fetchData();
  }, [search, page, setLoading]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      {!loading && !error && response.length === 0 && <p>No results</p>}
      {!loading && !error && response.length > 0 && (
        <ImageGallery images={response} onImageClick={onImageClick} />
      )}
      {!loading && !error && response.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
