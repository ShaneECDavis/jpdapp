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
import { calc } from '../store/'

class ExcelSheet extends Component {
  state = {
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
//  form validation example 
    // <TextField
    //   hintText="Phone"
    //   error={this.state.errorText.length === 0 ? false : true}
    //   floatingLabelText="Phone"
    //   name="phone"
    //   helperText={this.state.errorText}
    //   onChange={this.onChange.bind(this)} />




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
                    error={false}
                    helperText="Empty field"
                    style={styles.textField}
                    value={this.state.diameter}
                    onChange={this.handleChange}
                    label="Diameter"
                    placeholder="diameter"
                  />
                  <TextField
                    name="flutes"
                    variant="outlined"
                    style={styles.textField}
                    value={this.state.flutes}
                    onChange={this.handleChange}
                    label="flutes"
                    placeholder="flutes"
                  />
                  <TextField
                    name="ipt"
                    variant="outlined"
                    style={styles.textField}
                    value={this.state.ipt}
                    onChange={this.handleChange}
                    label="IPT(C/L)"
                    placeholder="IPT(C/L)"
                  />

                  <TextField
                    name="sfm"
                    variant="outlined"
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
  }
}
