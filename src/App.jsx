import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UnsplashAPI from "./components/UnsplashAPI";
import Loader from "./components/Loader";
import ImageModal from "./components/ImageModal";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import { Toaster } from "react-hot-toast";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (search) {
      setPage(1);
      setImages([]);
    }
  }, [search]);

  const handleSearch = (request) => {
    setSearch(request);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage error={error} />}
      <UnsplashAPI
        search={search}
        setLoading={setLoading}
        onImageClick={handleImageClick}
        setError={setError}
        page={page}
        setImages={setImages}
        images={images}
      />
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      {images.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
