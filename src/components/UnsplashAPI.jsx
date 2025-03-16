import axios from "axios";
import { useEffect } from "react";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";

const API_KEY = "70g0lZUS49PVNQQ69Yw_gterSWQjLehn_kWYtrbaUxQ";

export default function UnsplashAPI({
  search,
  setLoading,
  onImageClick,
  setError,
  page,
  setImages,
  images,
  error,
  loading,
}) {
  useEffect(() => {
    if (!search) {
      return;
    }
    const URL = `https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${API_KEY}`;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(URL);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [search, page, setLoading, setError, setImages]);

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      {!loading && !error && search && images.length === 0 && <p>No results</p>}
      {!loading && !error && images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
    </div>
  );
}
