import React, { Component } from 'react';
import UrlTextElement from '../../components/UrlTextElement/UrlTextElement';
import ScanButton from '../../components/ScanButton/ScanButton';
import ScanResults from '../../components/ScanResults/ScanResults';

class UrlElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
                scanFlag: false,
                result: null
            };
    }

    onClick() {
        console.log("click");
        var enteredUrl = $("input[type=search]").val();
        if(enteredUrl == '') {
            console.log("empty")
            this.setState({
                scanFlag: false,
                result: "malicious"
            });
            return;
        }
        fetch("/todo/api/v1/url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "url": enteredUrl
            }),
        })
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result.response.detection);
            this.setState({
                scanFlag: true,
                result: result.response.detection
            });
            },
            (error) => {
                this.setState({
                    scanFlag: false,
                    result: null
                });
            }
        )
    }

    render() {
        return (
            <div className="searchElement">
                <UrlTextElement result = {this.state.result}/>
                <br></br>
                <ScanButton onClickHandler = {() => this.onClick()}/>
                <ScanResults flag = {this.state.scanFlag} result = {this.state.result} />
            </div>
        );
    }
}

export default UrlElement;
