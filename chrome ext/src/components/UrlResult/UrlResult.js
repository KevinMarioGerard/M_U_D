import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Url from '../Url/Url';

class UrlResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: true
    }
    console.log(props);
  }
  
  render() {
    return (
      <List>
        {this.props.urlList.map(url => (
          <Url url = {url} />   
        ))}
      </List>
    );
  }
}

export default UrlResult;