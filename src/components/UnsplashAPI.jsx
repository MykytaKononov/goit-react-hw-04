import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";

const API_KEY = "70g0lZUS49PVNQQ69Yw_gterSWQjLehn_kWYtrbaUxQ";

export default function UnsplashAPI({ search, setLoading }) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    const URL = `https://api.unsplash.com/search/photos?query=${search}&client_id=${API_KEY}`;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(URL);
        setResponse(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [search, setLoading]);

  return (
    <div>
      <ImageGallery images={response} />
    </div>
  );
}
