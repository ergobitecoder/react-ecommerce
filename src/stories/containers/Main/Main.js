import React from "react";
import PropTypes from "prop-types";
import { MyMain } from "./index.styles";
import MainMenu from "../MainMenu/MainMenu";

function Main(props) {
    return (
        <MyMain {...props} onClick={props.onClick}>
            <MainMenu data={props.Productdata} />
        </MyMain>
    );
}

Main.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Main;
