import React, {Component} from "react";
import "./preLoader.scss"

class PreLoader extends Component{
    render() {
        return (
            <div className="lds-default preloader__wrapper">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default PreLoader