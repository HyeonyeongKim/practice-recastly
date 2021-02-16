import React from "react";
import Search from "./Search";

const Nav = (props) => {
    return (
        <nav className = "navbar">
            <div className="col-md-6 col-md-offset-3">
                <Search handleClickOnSearchBtn = {props.handleClickOnSearchBtn}/>
            </div>
        </nav>
    )
}

export default Nav;