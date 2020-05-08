// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

const ButtonStyle = {
	border: "none",
	width: 100,
	height: 30,
	background: "yellow",
};

// const ButtonChild02 = (props) => (
// 	// <button style={ButtonStyle}>{"자식 버튼 02"}</button>
// 	<button style={ButtonStyle}>{props.title}</button>
// );

const ButtonChild02 = ({ title }) => (
	<button style={ButtonStyle}>{title}</button>
);

export default ButtonChild02;
