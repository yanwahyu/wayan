import React, {Component,Fragment} from 'react';
const Geo = require('geo-nearby');

class Home extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            city: [],
            lats : '',
            long : ''
        }
    }
    
    async Kirim() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(Position => {
                fetch("http://localhost:3000/csvjson.json")
                .then(response => { return response.json()})
                .then(data => {
                    const geo = new Geo(data, { setOptions: { id: 'name', lat: 'lat', lon: 'lon' } })
                  
                
                const a = geo.limit(2).nearBy(Position.coords.latitude, Position.coords.longitude, 10000)
                
                this.setState({ city:a})
                })
                
            })
    
          } else { 
    
          } 
    }
    
    render(){
        let {city} = this.state
        return(

            <Fragment>
                {city.map((item, index) =>
                    <li key={index}>{item.i}</li> //harus ada key index
                    )}
                <div className="form-add">
                    <button onClick={() => this.Kirim()}>Kirim</button>
                </div>
            </Fragment>
            
        )
    }

}

export default Home;