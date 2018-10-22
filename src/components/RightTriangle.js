import React, { Component, Fragment } from 'react'
import {
  Paper,
  Grid,
  FormGroup,
  TextField,
  Card,
  Button
} from '@material-ui/core'

class RightTriangle extends Component {
  handleSubmit(event) {}

  render() {
    return (
      <Fragment>
        <Grid
          container
          justify="center"
          direction="column-reverse"
          alignItems="center"
        >
          <Grid>
            <Card raised style={{ width: '99vw' }}>
              <form onSubmit={this.handleSubmit} style={styles.form}>
                <Grid
                  container
                  justify="center"
                  direction="column-reverse"
                  alignItems="center"
                >
                  <Grid
                    container
                    justify="center"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid>
                      <TextField
                        variant="outlined"
                        style={styles.textField}
                        label="Diameter"
                        placeholder="diameter"
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        variant="outlined"
                        style={styles.textField}
                        label="Flutes"
                        placeholder="flutes"
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        variant="outlined"
                        style={styles.textField}
                        label="IPT(C/L)"
                        placeholder="IPT(C/L)"
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        variant="outlined"
                        style={styles.textField}
                        label="SFM"
                        placeholder="SFM"
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <TextField
                      disabled
                      variant="outlined"
                      style={styles.changed}
                      label="RPM"
                      placeholder="RPM"
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      disabled
                      variant="outlined"
                      style={styles.changed}
                      label="IPM"
                      placeholder="IPM"
                    />
                  </Grid>
                  <Grid container direction="column" alignItems="center">
                    <Grid>
                      <Button style={styles.button}> TADB</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default RightTriangle

const styles = {
  form: {
    justifiedContent: 'spaceBetween',
    width: '95vw',
    height: '100%',
    alignItems: 'center'
  },
  textField: {
    width: '85vw',
    margin: 20,
    paddingRight: 5
  },
  changed: {
    width: '85vw',
    margin: 20,
    paddingRight: 5,
    background: '#b8ffb7',
    color: 'white'
  },
  button: {
    width: '85vw',
    background: '#3247ff',
    margin: 20,
    color: 'white'
  }
}
