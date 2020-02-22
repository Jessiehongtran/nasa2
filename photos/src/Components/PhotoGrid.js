import React from 'react';
import axios from 'axios';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: '2012-02-15',
            photo: '',
            title: '',
            explanation: '',
            
        }
    }

    decreaseDate(){
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

    increaseDate(){
        var currentDate = this.state.date
        for (let i = 0; i < currentDate.length; i++){
            var yyyy = currentDate.slice(0, 4)
            var mm = currentDate.slice(5,7)
            var dd = currentDate.slice(8,10)
        }

        var date = parseInt(dd)+1
        var month = parseInt(mm)
        var year = parseInt(yyyy)

        if (date >= 30){
            date = 0
            month = month +1 
        }
        
        if (month >= 12){
            month = 1
            year = year + 1
        }

        const tomorrow = String(year) + "-" + String(month).padStart(2, '0') + "-" + String(date).padStart(2, '0')
        this.setState({date: tomorrow})

    }


    componentDidMount(){
        console.log('date in componentDidMount', this.state.date)
        axios 
        .get(`https://api.nasa.gov/planetary/apod?api_key=HpJEx1kZ3eD7MbBaHy0qDJKbMdjIEiAaprSj7Y8u&date=${this.state.date}`)
        .then(res => {
            console.log(res)
            this.setState({
                date: res.data.date,
                photo: res.data.url,
                title: res.data.title,
                explanation: res.data.explanation

            })
            })
        .catch(err=>{
            console.log('err', err)})
        
    }

    fetchImages(){
        console.log("hello")
        axios 
        .get(`https://api.nasa.gov/planetary/apod?api_key=HpJEx1kZ3eD7MbBaHy0qDJKbMdjIEiAaprSj7Y8u&date=${this.state.date}`)
        .then(res => {
            console.log(res)
            this.setState({
                date: res.data.date,
                photo: res.data.url,
                title: res.data.title,
                explanation: res.data.explanation
            })
            })
        .catch(err=>{
            console.log('err', err)})
       }


    render(){
        console.log('the date', this.state.date)
        return (
            <div>
                <button onClick={() => 
                {
                 this.decreaseDate()
                 this.fetchImages()
                }
                }>Time back</button>
                <button onClick={() => 
                {
                 this.increaseDate()
                 this.fetchImages()
                }
                }>Time forward</button>
                <p>{this.state.date}</p>
                <p>{this.state.title}</p>
                <p>{this.state.explanation}</p>
                <img src={this.state.photo}/>
            </div>
        )
    }
}

export default PhotoGrid;