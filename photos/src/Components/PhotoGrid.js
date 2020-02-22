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

    increaseDate(){
        var currentDate = this.state.date
        for (let i = 0; i < currentDate.length; i++){
            var yyyy = currentDate.slice(0, 4)
            var mm = currentDate.slice(5,7)
            var dd = currentDate.slice(8,10)
        }

        var date = parseInt(dd)-1
        var month = parseInt(mm)
        var year = parseInt(yyyy)

        if (date <= 0){
            date = 30
            month = month -1 
        }
        
        if (month <= 0){
            month = 12
            year = year - 1
        }

        const yesterday = String(year) + "-" + String(month).padStart(2, '0') + "-" + String(date).padStart(2, '0')
        this.setState({date: yesterday})

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
        console.log('the date', this.state.date)
        return (
            <div>
                <button onClick={() => this.increaseDate()}>Next date</button>
                <img src={this.state.photo}/>
            </div>
        )
    }
}

export default PhotoGrid;