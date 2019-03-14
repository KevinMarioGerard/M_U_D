import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        console.log("progress rendering");
        console.log(Math.ceil((this.props.progress / this.props.noOfUrls) * 100));
        console.log("-----------------------------");
        return (
            <div>
                <LinearProgress variant="determinate" value={Math.ceil((this.props.progress / this.props.noOfUrls) * 100)} />
            </div>
        );
    }
}

export default ProgressBar;

  