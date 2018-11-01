import React , {Component} from 'react'



class BeerFinder extends Component {

  render (){

    return (
      <div>
        BeerFinder
        Inster beer api
      </div>
    )
  }
}

const mapState = state =>({
  topbeers: state.topbeers
})

const mapDispatch = dispatch =>({
  searchBeer: (beerSearch) => dispatch(searchBeer(beerSearch))
})

export default BeerFinder