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
import { calc, reset } from '../store/'

class ExcelSheet extends Component {
  state = {
    diameter: '',
    flutes: '',
    ipt: '',
    sfm: '',
    diameterError: false,
    flutesError: false,
    iptError: false,
    sfmError: false,
    submitDisabled: true
  }

  resetForm = () => {
    this.setState({
      diameter: '',
      flutes: '',
      ipt: '',
      sfm: '',
      diameterError: false,
      flutesError: false,
      iptError: false,
      sfmError: false,
      submitDisabled: true
    })
    this.props.reset()
  }

  validation(name, value) {

    if (value === ''
      || (isNaN(value))) {
      console.log(this.state.diameterError, 'before', this)
      this.setState({
        [`${name}Error`]: true, [name]: value
      })
    
      console.log(this.state.diameterError, ' after')
    } else {
      console.log(name, value)
      this.setState({
        [name]: value,
        [`${name}Error`]: false
      })
    
    }

  }

  toggleSubmitDisabled = () => {
    let { diameterError, flutesError, iptError, sfmError } = this.state
    console.log(diameterError, flutesError, iptError, sfmError ) 
    if (diameterError === true || flutesError === true || iptError === true || sfmError === true) {
      this.setState({ submitDisabled: true })
    } else {
      this.setState({ submitDisabled: false })
    }
  }

  // going to have to use prevState inside
  handleChange = ({ target: { name, value } }) => {

    this.validation(name, value)
    this.toggleSubmitDisabled()
  }
  handleSubmit(event) {

    event.preventDefault()
    let sfm = event.target.sfm.value
    let diameter = event.target.diameter.value
    let ipt = event.target.ipt.value
    let flutes = event.target.flutes.value


    this.props.calcRPM({
      sfm,
      ipt,
      diameter,
      flutes
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
              <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                <FormGroup>
                  <TextField
                    name="diameter"
                    variant="outlined"
                    error={this.state.diameterError}
                    style={styles.textField}
                    value={this.state.diameter}
                    onChange={this.handleChange}
                    label="Diameter"
                    placeholder="diameter"
                  />
                  <TextField
                    name="flutes"
                    variant="outlined"
                    error={this.state.flutesError}
                    style={styles.textField}
                    value={this.state.flutes}
                    onChange={this.handleChange}
                    label="flutes"
                    placeholder="flutes"
                  />
                  <TextField
                    name="ipt"
                    variant="outlined"
                    error={this.state.iptError}
                    style={styles.textField}
                    value={this.state.ipt}
                    onChange={this.handleChange}
                    label="IPT(C/L)"
                    placeholder="IPT(C/L)"
                  />

                  <TextField
                    name="sfm"
                    variant="outlined"
                    error={this.state.sfmError}
                    style={styles.textField}
                    value={this.state.sfm}
                    onChange={this.handleChange}
                    label="SFM"
                    placeholder="SFM"
                  />

                  <TextField
                    name="rpm"
                    disabled
                    variant="outlined"
                    style={styles.changed}
                    value={this.props.rpm}
                    label="RPM"
                    placeholder="RPM"
                  />

                  <TextField
                    name="ipm"
                    disabled
                    variant="outlined"
                    value={this.props.ipm}
                    style={styles.changed}
                    label="IPM"
                    placeholder="IPM"
                  />

                  <Grid container direction="column" alignItems="center">
                    <Grid>
                      <Button type="submit" style={(this.state.submitDisabled) ? styles.disabledButton : styles.button} disabled={this.state.submitDisabled}>
                        SUBMIT
                      </Button>
                      <Button onClick={this.resetForm} style={styles.resetButton} >
                        Reset
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

const mapState = state => {
  let { rpm, ipm } = state.excelSheetReducer
  return {
    rpm,
    ipm
  }
}

const mapProps = dispatch => ({
  calcRPM: data => {
    dispatch(calc(data))
  },
  reset: () => {
    dispatch(reset())
  }
})

export default connect(
  mapState,
  mapProps
)(ExcelSheet)

// mapState = state =>({

// })

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
    color: 'black'
  },
  button: {
    width: '85vw',
    background: '#3247ff',
    margin: 20,
    color: 'white'
  },
  resetButton: {
    width: '85vw',
    background: '#f2f254',
    margin: 20,
    color: 'white'
  },
  disabledButton: {
    width: '85vw',
    background: '#6d6d6d',
    margin: 20,
    color: 'white'
  }
}
