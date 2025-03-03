import SearchForm from "./SearchForm";
import { BG_URL } from "../assets/constants";
import SearchResult from "./SearchResult";

const GPTSearch = () => {
  return (
    <div>
      <div>
        <img
          className="fixed -z-10 brightness-45 w-screen h-screen object-cover"
          src={BG_URL}
        />
      </div>
      <div>
        <SearchForm />
      </div>
      <SearchResult />
    </div>
  );
};

export default GPTSearch;
