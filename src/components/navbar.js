import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component
{
    render()
    {
        return(
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        )
    }
}