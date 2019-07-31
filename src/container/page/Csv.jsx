import React, {Component,Fragment} from 'react';
import Papa from 'papaparse';


  
class Csv extends Component{
    
  constructor(props) {
    super(props);

    this.state = {
        data: []
    };

    this.getData = this.getData.bind(this);
}

componentWillMount() {
    this.getCsvData();
}

fetchCsv() {
    return fetch('https://raw.githubusercontent.com/benangmerah/wilayah/master/datasources/daftar-nama-daerah.csv').then(function (response) {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result) {
            return decoder.decode(result.value);
        });
    });
}

getData(result) {
    this.setState({data: result.data});
}

async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
        complete: this.getData
    });
}

render() {
  const {city} = this.state
        return(

            <Fragment>
                
                {city}
            </Fragment>
           ); 
}
}

export default Csv;