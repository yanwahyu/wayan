import React, {Component,Fragment} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './page/Home';

class Index extends Component{
    state = {
        showcomponent :true
    }

    render(){
        return(
            <BrowserRouter>
            <Fragment>
                <div className="navigation">
                <Link to="/">Homepage</Link><br/>
                <Link to="/Csv">Csv</Link><br/>
                <Link to="/user/activity">Activity</Link><br/>
                </div>
            <Route path="/" exact component={Home} />
            </Fragment>
            
            </BrowserRouter>
        )
    }

}

export default Index;