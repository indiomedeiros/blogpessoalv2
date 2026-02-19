function SearchInput() {
  return (
    <label htmlFor="search">
      <input
        className=" border border-gray-300 w-full p-2 rounded-xl focus:outline-none focus:border-orange-700  "
        placeholder="Buscar postagens por título"
        type="text"
        name="search"
        id="search"
      />
    </label>
  );
}

export default SearchInput;
