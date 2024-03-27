import { useState } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import SearchContext from "../utils/searchContext";

const MainContainer = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  return (
    <div className="flex-grow m-10 ml-96">
      <SearchContext.Provider value={searchItem}>
        <Header setSearchItem={setSearchItem} />
        <ListContainer />
      </SearchContext.Provider>
    </div>
  );
};

export default MainContainer;
