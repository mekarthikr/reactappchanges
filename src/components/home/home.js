import React, { Component, Fragment } from "react";

export default class Home extends Component
{
    render()
    {
        return(
            <Fragment>
                <button onClick='/home'>Guest</button>
                <button>Admin</button>
            </Fragment>
        )
    }
}