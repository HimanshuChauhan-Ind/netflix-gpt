const SearchForm = () => {
  return (
    <div className="absolute top-1/4 w-full flex justify-center">
      <form className="grid grid-cols-12 w-2/4">
        <input
          className="bg-white p-4 col-span-9 rounded-xl"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="bg-red-500 text-white p-4 col-span-3  ml-4 rounded-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
