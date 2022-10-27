import React, { useState, useContext } from "react";
import { AllPostContext } from "../../contextStore/AllPostContext";
import { PostContext } from "../../contextStore/PostContext";
import CloseIcon from "../../assets/CloseIcon/CloseIcon";
import { useHistory } from "react-router";
import "./search.css";
import Search_icon from "../../assets/search-icon.png";
function Search() {
  const { allPost, setAllPost } = useContext(AllPostContext);
  const { setPostContent } = useContext(PostContext);
  const history = useHistory();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.category.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleSelectedSearch = (item) => {
    setPostContent(item);
    history.push("/view");
  };
  const handleSearchClick = () => {
    if (filteredData.length === 0) {
      alert("No Searched Result Found!!");
    } else {
      setAllPost(filteredData);
      history.push("/viewmore");
    }
  };
  return (
    <div className="search_product">
      <input
        type="text"
        placeholder="Search for Products"
        value={wordEntered}
        onChange={handleFilter}
      />
      <div className="search_icon">
        <div onClick={handleSearchClick}>
          {" "}
          <img src={Search_icon} height="30px" width="30px" alt="Search" />{" "}
        </div>
        {filteredData.length !== 0 && (
          <div id="clearBtn" onClick={clearInput}>
            <CloseIcon />
          </div>
        )}
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                key={key}
                className="dataItem"
                onClick={() => handleSelectedSearch(value)}
              >
                <p className="searchedResults">{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>

    // <div className="search">
    //   <div className="searchInputs">
    //     <input
    //       type="text"
    //       placeholder="Search for Products"
    //       value={wordEntered}
    //       onChange={handleFilter}
    //     />
    //     <div className="searchIcon">
    //       <div onClick={handleSearchClick}>
    //         {" "}
    //         <SearchIcon color="#098bbf" />{" "}
    //       </div>
    //       {filteredData.length !== 0 && (
    //         <div id="clearBtn" onClick={clearInput}>
    //           <CloseIcon />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length !== 0 && (
    //     <div className="dataResult">
    //       {filteredData.slice(0, 15).map((value, key) => {
    //         return (
    //           <div
    //             key={key}
    //             className="dataItem"
    //             onClick={() => handleSelectedSearch(value)}
    //           >
    //             <p>{value.name} </p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
  );
}

export default Search;
