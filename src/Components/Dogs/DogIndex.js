import React, { Component } from 'react';

class DogIndex extends Component {
    constructor() {
        super();
        this.url = "https://dog.ceo/api/breeds/image/random";
        this.state = {
            image: "",
        };
    }

    componentDidMount() {
        this.fetchFido();
    }

    fetchFido = () => {
        fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.status === "success") {
                    this.setState({ image: data.message });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };



    render() {
        return (
            <div className="dogIndexMain">
                <button className="fetchFido" onClick={this.fetchFido} >Let's Play Fetch!</button>
                <hr/>
                <div className="shotsOfSpot">
                    <img className="shotsOfSpot" src={this.state.image} alt="doggo" />
                </div>
            </div>
        )
    }
}

export default DogIndex;