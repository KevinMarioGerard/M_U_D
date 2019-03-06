import React, { Component } from 'react';
import UrlTextElement from '../../components/UrlTextElement/UrlTextElement';
import ScanButton from '../../components/ScanButton/ScanButton';

class UrlElement extends Component {
    onClick() {
        console.log("click");
        $.ajax(
            {
                url: "http://localhost:5000/todo/api/v1/url", 
                type: "POST",
                contentType: 'application/json;charset=UTF-8',
                data: {
                    "url": "www.funad.co.kr:80/dynamic/adv/sb/searchnqpopu.html"
                },
                success: function(result){
                    console.log(result);
          }});
    }

    render() {
    return (
        <div className="searchElement">
            <UrlTextElement />
            <br></br>
            <ScanButton onClickHandler = {this.onClick}/>
        </div>
    );
    }
}

export default UrlElement;
