import ReactDOM from "react-dom";
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import UrlResult from '../components/UrlResult/UrlResult';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.flag
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            open: false
        });
        $('#rootdialog').remove();
    }

    render() {
      return (
        <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {"Malicious Url Detector"}
            </DialogTitle>
            <DialogContent>
                <UrlResult urlList = {this.props.urlList}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      );
    }
}

//=================================================================================================
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.id == 'scanUrl') {
            console.log(request.url);
            $('body').append('<div id="rootdialog"></div>');
            ReactDOM.render(<AlertDialog urlList = {[request.url]} flag = {true}/>, document.getElementById('rootdialog'));
        }
        else if(request.id == 'scanPage') {
            console.log(request);
            new Promise(function(resolve, reject){
                var urlList = [];
                var anchor_tags = document.getElementsByTagName("a");
                for(let i = 0; i < anchor_tags.length; i++) {
                    console.log(anchor_tags[i].href);
                    urlList.push(anchor_tags[i].href);
                }
                resolve(urlList)
            }).then(function(resp) {
                console.log("returning response");
                console.log(resp);
                $('body').append('<div id="rootdialog"></div>');
                ReactDOM.render(<AlertDialog urlList = {resp} flag = {true}/>, document.getElementById('rootdialog'));
            });
            return true;
        }
    }
);


/*fetch("https://glacial-ridge-51682.herokuapp.com/todo/api/v1/url", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "url": anchor_tags[i].href
                        }),
                    })
                    .then(res => res.json())
                    .then(
                        (result) => {
                            console.log(result.response.detection);
                            response.push(result);
                            console.log(j);
                            if(j == 1) {
                                resolve(response);
                            }
                            j--;
                        },
                        (error) => {
                            console.log(error);
                        }
                    )*/