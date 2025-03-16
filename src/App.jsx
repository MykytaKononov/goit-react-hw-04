import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UnsplashAPI from "./components/UnsplashAPI";
import Loader from "./components/Loader";
import ImageModal from "./components/ImageModal";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Loader loading={loading} />
      <UnsplashAPI
        search={search}
        setLoading={setLoading}
        onImageClick={handleImageClick}
        onRequestClose={handleCloseModal}
      />
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
