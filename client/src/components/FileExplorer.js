import React from 'react';
import clsx from 'clsx';
import '../components/FileExplorer.css';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../components/Title';
import Link from '@material-ui/core/Link';
import Tree from 'react-animated-tree';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

}));
const treeStyles = {

    top: 20,
    left: 20,
    color: 'white',
    fill: 'white',
    width: '100%'
}

const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
}

function preventDefault(event) {
    event.preventDefault();
}


export default function FileExplorer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>File Explorer</Title>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >



            <Grid item xs={12} sm={6} spacing={3}>{/*Grid One Start*/}
            <Tree content="cameraTrap" type="FOLDER" open style={treeStyles}>

                <Tree content="anwr" canHide>

                    <Tree content="31">
                        <Tree content="100RECNX" style={{ color: '#63b1de' }} >
                            <Tree content="RCNX0001.JPG" style={{ color: '#63b1de' }} />
                            <Tree content="RCNX0001.JPG" style={{ color: '#63b1de' }} />
                        </Tree>
                    </Tree>

                    <Tree content="32" />

                    <Tree content="33" />
                </Tree>

                <Tree content="stinchcomb" canHide />

                <Tree content="prudhoe" canHide />

                <Tree content="ivvavik" canHide />

                <Tree content="dempster" canHide />

                <Tree content="dalton" canHide />

            </Tree>
            </Grid>{/*Grid One End*/}


            <Grid item xs={12} sm={6} spacing={3}>{/*Grid Two Start*/}
            <Tree content="real" type="FOLDER" open style={treeStyles}>

                <Tree content="anwr" canHide>

                    <Tree content="31">
                        <Tree content="100RECNX" style={{ color: '#63b1de' }} >
                            <Tree content="R0001.FLAC" style={{ color: '#63b1de' }} />
                            <Tree content="R0002.FLAC" style={{ color: '#63b1de' }} />
                        </Tree>
                    </Tree>

                    <Tree content="32" />

                    <Tree content="33" />
                </Tree>

                <Tree content="stinchcomb" canHide />

                <Tree content="prudhoe" canHide />

                <Tree content="ivvavik" canHide />

                <Tree content="dempster" canHide />

                <Tree content="dalton" canHide />

            </Tree>
            </Grid>{/*Grid Two End*/}


            </Grid>
        </React.Fragment>
    );
}