import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
