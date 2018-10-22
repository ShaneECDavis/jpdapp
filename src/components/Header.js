import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

class Header extends Component {
  state = {
    left: false
  }

  toggleDrawer = open => () => {
    this.setState({
      left: open
    })
  }

  render() {
    return (
      <Fragment>
        <Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.toggleDrawer(true)} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Fragment>
        <Fragment>
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
              style={styles.list}
            >
              <Paper>
                <List component="nav">
                  <ListItem component={Link} to="/" button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component={Link} to="/ExcelSheet" button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Main" />
                  </ListItem>
                </List>
              </Paper>
            </div>
          </SwipeableDrawer>
        </Fragment>
      </Fragment>
    )
  }
}

export default Header

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}
