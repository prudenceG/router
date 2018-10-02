import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Savoir_plus from './Savoir-plus'
import './Nav.css'
class Nav extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
                <div className="main-page" >
                    <div className="section-menu" >
                        <NavLink className="navlink basic-link black-active" exact to="/">Accueil</NavLink>
                        <NavLink className="navlink basic-link red-active" to="/notre-histoire"> Contact </NavLink>
                        <NavLink className="navlink basic-link black-active" to="/en-savoir-plus"> En savoir plus </NavLink>
                        <hr/>
                    </div>

                    <div className="page-content" >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/notre-histoire" component={Contact} />
                            <Savoir_plus path="/en-savoir-plus" component={Savoir_plus} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}
 
export default Nav;