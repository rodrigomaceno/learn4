import React from "react";

export default class Board extends React.Component {
    render() {
        return(
            <div style={{width: '200px', height: '200px', backgroundColor: this.props.color}}>My box</div>
        )
    }
}