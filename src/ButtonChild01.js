import React, { Component } from "react";

const ButtonStyle = {
	border: "none",
	width: 100,
	height: 30,
	background: "orange",
};

class ButtonChild01 extends Component {
	/*
		construct(props){
			super()
			this.state = {
				title: this.props.color,
		    color: this.props.color
			}
		}
	*/

	state = {
		title: this.props.title,
		color: this.props.color,
	};

	render() {
		// return <button style={ButtonStyle}>{"자식 버튼 01"}</button>;
		// ex) 클래스형 컴포넌트에선 this.props.를 통해 이 버튼에 전달된 속성값이 들어 있는 props에 접근하여 특정 속성값(title)을 꺼내옴
		// return <button style={ButtonStyle}>{this.props.title}</button>;
		// ex) 비구조 할당 방식
		const { title, color } = this.state;
		const ButtonStyle = {
			border: "none",
			width: 100,
			height: 30,
			background: color,
		};
		return <button style={ButtonStyle}>{title}</button>;
	}
}

ButtonChild01.defaultProps = {
	title: "이름없음 버튼",
};

export default ButtonChild01;
