import React from 'react';
import axios from 'axios';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: '2012-02-14',
            photo: ''
        }
    }

    componentDidMount(){
        axios 
        .get(`https://api.nasa.gov/planetary/apod?api_key=HpJEx1kZ3eD7MbBaHy0qDJKbMdjIEiAaprSj7Y8u&date=${this.state.date}`)
        .then(res => {
            console.log(res)
            this.setState({photo: res.data.url})
            })
        .catch(err=>{
            console.log('err', err)})
        
    }


    render(){
        return (
            <div>
                <img src={this.state.photo}/>
            </div>
        )
    }
}

export default PhotoGrid;