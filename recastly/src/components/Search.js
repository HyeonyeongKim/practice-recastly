import React from "react";

const Search = (props) => {
    return(
    <div className = "search-bar form-inline">
        <input className = "form-control" type = "text"/>
        <button 
        className = "btn hidden-sm-down"
        onClick = { () => props.handleClickOnSearchBtn(document.querySelector(".form-control").value)}>
        검색
        </button>
    </div>
    )
}
export default Search;