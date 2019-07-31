import React, {Component,Fragment} from 'react';
const Geo = require('geo-nearby');


class Home extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            city: []
        }
    }

    componentDidMount(){
        
        const data = [
            { lat: -35.30278, lon: 149.14167, name: 'Canberra' },
            { lat: -33.86944, lon: 151.20833, name: 'Sydney' },
            { lat: -37.82056, lon: 144.96139, name: 'Melbourne' },
            { lat: -34.93333, lon: 138.58333, name: 'Adelaide' },
            { lat: -27.46778, lon: 153.02778, name: 'Brisbane' },
            { lat: -31.95306, lon: 115.85889, name: 'Perth' }
          ];
        
                const geo = new Geo(data, { setOptions: { id: 'name', lat: 'lat', lon: 'lon' } });
                const a = geo.limit(5).nearBy(-33.87, 151.2, 500000);
        
        this.setState({ city:a})
        
    }
    render(){
        
        let {city} = this.state
        console.log(city)
        return(

            <Fragment>
                
                {city.map((item, index) =>
                    <li key={index}>{item.i}</li> //harus ada key index
                    )}
            </Fragment>
            
        )
    }

}

export default Home;