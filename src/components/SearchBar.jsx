import { useState } from "react";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function SearchBar({ onSearch }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (request.trim() === "") {
      iziToast.error({
        title: "Error",
        message: "Search can't be empty",
      });
      return;
    }
    onSearch(request);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={(event) => setRequest(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
