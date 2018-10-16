import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

class Header extends Component {
  state = {
    left: false
  }

  toggleDrawer = ( open) => () => {
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
                <MenuIcon onClick=
                {this.toggleDrawer(true)} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Fragment>
        <Fragment>
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer( false)}
            onOpen={this.toggleDrawer( true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer( false)}
              onKeyDown={this.toggleDrawer( false)}
              style={styles.list}
            >
             Insert Component
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
