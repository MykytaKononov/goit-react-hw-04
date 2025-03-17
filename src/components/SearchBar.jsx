import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (request.trim() === "") {
      toast.error("Search can't be empty");
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
