import React, {Component} from "react";
import "../App.css";

class HomePage extends Component {
    render() {
        return (
            <div className="content-holder">
                <div className="center">
                    <p style={{color:"white", textAlign: "center"}}> This website is currently under construction... </p>
                    <p style={{color:"white", textAlign: "center"}}>Please view my <a href="http://www.github.com/atkinsta">github profile</a> for a portfolio of my work</p>
                </div>
            </div>
        )
    }
}

export default HomePage