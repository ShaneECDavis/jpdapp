import React , {Component} from 'react'
import {Card,TextField,FormGroup, Grid } from '@material-ui/core'
import {gql} from 'graphql-tag'
import { Query } from 'react-apollo'



class BeerFinder extends Component {

  render (){
    const TOP_BEERS = gql`
      {
topBeers{
  items{
    name
    imageUrl
  	ibu
  }
}
  
}
    `
    return (
     <Query query={TOP_BEERS}>
        {({loading, error, data})=>{
          if(loading) return 'loading ...'
          if(error) return `Error! ${error.message}`

          return (
            <div>
              {data.topBeers.items.map(beer =>{
                <Card> <div>{beer.name} </div> </Card>
              })}
            </div> 
          )
        }}
       </Query>

    )

      // return (
      // <Fragment>
      //   <Grid
      //     container
      //     justify="center"
      //     direction="column-reverse"
      //     alignItems="center"
      //   >
      //     <Grid>
      //       <Card raised style={{ width: '99vw' }}>
      //         <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
      //           <FormGroup>
      //             <TextField
      //               name="diameter"
      //               variant="outlined"
      //               style={styles.textField}
      //               value={this.state.diameter}
      //               onChange={this.handleChange}
      //               label="Diameter"
      //               placeholder="diameter"
      //             />
      //             <TextField
      //               name="flutes"
      //               variant="outlined"
      //               style={styles.textField}
      //               value={this.state.flutes}
      //               onChange={this.handleChange}
      //               label="flutes"
      //               placeholder="flutes"
      //             />
      //             <TextField
      //               name="ipt"
      //               variant="outlined"
      //               style={styles.textField}
      //               value={this.state.ipt}
      //               onChange={this.handleChange}
      //               label="IPT(C/L)"
      //               placeholder="IPT(C/L)"
      //             />

      //             <TextField
      //               name="sfm"
      //               variant="outlined"
      //               style={styles.textField}
      //               value={this.state.sfm}
      //               onChange={this.handleChange}
      //               label="SFM"
      //               placeholder="SFM"
      //             />

      //             <TextField
      //               name="rpm"
      //               disabled
      //               variant="outlined"
      //               style={styles.changed}
      //               value={this.props.rpm}
      //               label="RPM"
      //               placeholder="RPM"
      //             />

      //             <TextField
      //               name="ipm"
      //               disabled
      //               variant="outlined"
      //               value={this.props.ipm}
      //               style={styles.changed}
      //               label="IPM"
      //               placeholder="IPM"
      //             />

      //             <Grid container direction="column" alignItems="center">
      //               <Grid>
      //                 <Button type="submit" style={styles.button}>
      //                   TADB
      //                 </Button>
      //               </Grid>
      //             </Grid>
      //           </FormGroup>
      //         </form>
      //       </Card>
      //     </Grid>
      //   </Grid>
      // </Fragment>
  }
    
  }


// const mapState = state =>({
//   topbeers: state.topbeers
// })

// const mapDispatch = dispatch =>({
//   searchBeer: (beerSearch) => dispatch(searchBeer(beerSearch))
// })

export default BeerFinder

// going to hook in apollo here  lets finish this now


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
