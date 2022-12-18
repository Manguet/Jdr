import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar";

class Home extends Component {

    render() {
        return (
            <div>
                <NavBar />

                <Routes>
                    <Route exact path="/" component={ Home }/>
                    {/*<Route path="/users" component={Users}/>*/}
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                </Routes>
            </div>
        )
    }
}

export default Home;