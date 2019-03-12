import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class UrlResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
        img: 'img/scanning.gif'
    }
    console.log(props);
  }
  
  componentDidMount() {
    fetch("https://glacial-ridge-51682.herokuapp.com/todo/api/v1/url", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "url": this.props.url
        }),
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result.response.detection);
            if(result.response.detection == 'malicious') {
                this.setState({
                    img: 'img/malicious.png'
                });
            } 
            else if(result.response.detection == 'benign') {
                this.setState({
                    img: 'img/benign.png'
                });
            }
        },
        (error) => {
            console.log(error);
        }
    )
  }

  render() {
    return (
        <ListItem>  
            <img src={chrome.extension.getURL(this.state.img)} style={{height: "20px", width: "20px"}}/>
            <ListItemText primary={this.props.url} />
        </ListItem>
    );
  }
}

export default UrlResult;