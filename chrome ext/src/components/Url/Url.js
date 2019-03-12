import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        <ListItem>  
            <ListItemText primary={this.props.url} />
        </ListItem>
    );
  }
}

export default UrlResult;