import React from "react";
import { Card } from 'react-bootstrap';

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            synopsis: props.synopsis,
            title: props.title,
            image: props.image,
            spanId: props.spanId
        }
    }

    render() {
        return (
            <>
            <div>{this.state.title}</div>

            <Card.Img src={this.state.image}/>
            <div>{this.state.synopsis}</div>
            </>
        )
    }
}