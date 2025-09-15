import React, { Component } from 'react';
import '../App.scss'

class Navigation extends Component {
    render() {
        return (
            <div className='navigation'> 
                <div className='logo'>
                    LOGO
                </div>

                <div>
                    <ul>Agents</ul>
                    <ul>Maps</ul>
                    <ul>Weapons </ul>
                    <ul>Gamemodes</ul>
                    <ul>Player Cards</ul>
                </div>
            </div>
        );
    }
}

export default Navigation;

