import React, { Component } from "react";
import './Calculadora.css';

export default class Calculadora extends Component {
    render(){
        return(
            <div className="calc">
                <Button label="AC"/>
                <Button label="/"/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-"/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="="/>
                
            </div>
        )
    }
}