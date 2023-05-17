import { Component } from "react";


class Card extends Component{
    render() {
        return (
            <div className='card-container' key={this.props.id}>
                <img src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`} alt={`monster ${this.props.name}`} />
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card;