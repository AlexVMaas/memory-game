import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children} {props.score} {props.topscore}</h1>;

export default Title;
