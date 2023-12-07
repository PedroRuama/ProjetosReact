import React, { Component } from "react";
import './Calculadora.css';
import Button from "../components/Button";
import Display from "../components/Display";
export default class Calculadora extends Component {
    render(){
        return(
            <div className="calc">
                <Display value={100} />
                <Button label="AC" triple/>
                <Button label="/" operation/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*" operation/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-" operation/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+" operation/>
                <Button label="0" double/>
                <Button label="."/>
                <Button label="=" operation/>
                
            </div>
        )
    }
}