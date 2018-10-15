import React, { Component, Fragment } from 'react'
import { Paper, Grid, FormGroup, TextField, Card } from '@material-ui/core'

class ExcelSheet extends Component {
  handleSubmit(event) {}

  render() {
    return (
      <Fragment>
        <Paper>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
              >
          <Card varient="raised" >
            <form onSubmit={this.handleSubmit} style={styles.form}>
         
                <Grid>
                  <TextField placeholder="diameter" />
                </Grid>
                <Grid>
                  <TextField placeholder="flutes" />
                </Grid>
                <Grid>
                  <TextField placeholder="IPT(C/L)" />
                </Grid>
                <Grid>
                  <TextField placeholder="SFM" />
                </Grid>
                <Grid>
                  <TextField placeholder="RPM" />
                </Grid>
                <Grid>
                  <TextField placeholder="IPM" />
                </Grid>
              
            </form>
          </Card>
              </Grid>
        </Paper>
      </Fragment>
    )
  }
}

export default ExcelSheet

const styles = {
  form: {
    justifiedContent: 'spaceBetween',
    width: '100vw',
    height: '100vh'
  }
}
