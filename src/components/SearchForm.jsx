import { useSelector } from "react-redux";
import languageConstants from "../assets/languageConstants";

const SearchForm = () => {
  const language = useSelector((state) => state.config.lang);

  return (
    <div className="absolute top-1/4 w-full flex justify-center">
      <form className="grid grid-cols-12 w-2/4">
        <input
          className="bg-white p-4 col-span-9 rounded-xl"
          type="text"
          placeholder={languageConstants[language].query}
        />
        <button className="bg-red-500 text-white p-4 col-span-3  ml-4 rounded-xl">
          {languageConstants[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
