import SearchForm from "./SearchForm";
import { BG_URL } from "../assets/constants";

const GPTSearch = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10 brightness-45 w-screen h-screen object-cover"
          src={BG_URL}
        />
      </div>
      <div>
        <SearchForm />
      </div>
      <div>Search Movies</div>
    </div>
  );
};

export default GPTSearch;
