import ReactDOM from "react-dom";
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import UrlResult from '../components/UrlResult/UrlResult';
import ProgressBar from '../components/ProgressBar/ProgressBar';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.flag,
            progress: 0
        };
        this.handleClose = this.handleClose.bind(this);
        this.progressStatus = this.progressStatus.bind(this);
    }

    handleClose() {
        this.setState({
            open: false

        });
        $('#rootdialogscanningmud').remove(); 
        $('.mudScanningDialog').remove();
    }

    progressStatus() {
        this.setState({
            open: this.state.open,
            progress: (this.state.progress + 1)
        });
    }

    render() {
        console.log('rendering');
      return (
        <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            className="mudScanningDialog"
        >
            <DialogTitle id="alert-dialog-slide-title">
            <div className="title" style= {{
                color: "black",
                fontSize: "25px",
                width: "100%"
            }}
            >
                <img className="logoIcon" src={chrome.extension.getURL('img/logo.png')} style = {{height: "7%",
                    width: "7%",
                    padding: "0px 10px 0px 0px"}} 
                />
                    {"Malicious Url Detector"}
            </div>
            </DialogTitle>
            <ProgressBar progress = {this.state.progress} noOfUrls = {this.props.urlList.length}/>
            <DialogContent>
                <UrlResult urlList = {this.props.urlList} progress = {this.progressStatus}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary" style = {{margin: "20px 20px 20px 20px"}}>
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
            $('body').append('<div id="rootdialogscanningmud"></div>');
            ReactDOM.render(<AlertDialog urlList = {[request.url]} flag = {true}/>, document.getElementById('rootdialogscanningmud'));
        }
        else if(request.id == 'scanPage') {
            console.log(request);
            new Promise(function(resolve, reject){
                var urlList = [];
                var anchor_tags = document.getElementsByTagName("a");
                for(let i = 0; i < anchor_tags.length; i++) {
                    console.log(anchor_tags[i].href);
                    if(anchor_tags[i].href != '' && 
                        ((anchor_tags[i].href.match(new RegExp("/", "g")) || []).length > 3)) {
                        urlList.push(anchor_tags[i].href);
                    }
                }
                resolve(urlList)
            }).then(function(resp) {
                console.log("returning response");
                console.log(resp);
                $('body').append('<div id="rootdialogscanningmud"></div>');
                ReactDOM.render(<AlertDialog urlList = {resp} flag = {true}/>, document.getElementById('rootdialogscanningmud'));
            });
            return true;
        }
    }
);