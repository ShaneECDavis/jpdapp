import React, { Component, Fragment, cloneElement } from 'react'
import {
  Paper,
  Grid,
  FormGroup,
  TextField,
  Card,
  Button
} from '@material-ui/core'
import { connect } from 'react-redux'
import { calcRPM } from '../store/excelSheetReducer'

class ExcelSheet extends Component {
  state = {
    ipm: '',
    rpm: '',
    diameter: '',
    flutes: '',
    ipt: '',
    sfm: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    let sfm = event.target.sfm.value
    let diameter = event.target.diameter.value
    console.log(this, 'this.props -------------')
    this.props.calcRPM({
      sfm,
      diameter
    })
    this.setState({
      rpm: (event.target.sfm.value * 3.82) / event.target.diameter.value
    })
    this.setState({
      ipm:
        ((event.target.sfm.value * 3.82) / event.target.diameter.value) *
        event.target.ipt.value *
        event.target.flutes.value
    })
  }

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
                <FormGroup>
                  <TextField
                    name="diameter"
                    variant="outlined"
                    style={styles.textField}
                    value={this.state.diameter}
                    onChange={this.handleChange}
                    label="Diameter"
                    placeholder="diameter"
                  />

                  <TextField
                    name="ipt"
                    variant="outlined"
                    style={styles.textField}
                    label="IPT(C/L)"
                    placeholder="IPT(C/L)"
                  />

                  <TextField
                    name="sfm"
                    variant="outlined"
                    style={styles.textField}
                    label="SFM"
                    placeholder="SFM"
                  />

                  <TextField
                    name="rpm"
                    disabled
                    variant="outlined"
                    style={styles.changed}
                    value={this.state.rpm}
                    label="RPM"
                    placeholder="RPM"
                  />

                  <TextField
                    name="ipm"
                    disabled
                    variant="outlined"
                    value={this.state.ipm}
                    style={styles.changed}
                    label="IPM"
                    placeholder="IPM"
                  />

                  <Grid container direction="column" alignItems="center">
                    <Grid>
                      <Button type="submit" style={styles.button}>
                        TADB
                      </Button>
                    </Grid>
                  </Grid>
                </FormGroup>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default connect(
  null,
  mapProps
)(ExcelSheet)

// mapState = state =>({

// })

const mapProps = dispatch => ({
  calcRPM: (data)=>dispatch(calcRPM(data))
})

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
