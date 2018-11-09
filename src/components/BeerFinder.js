import React, { Component, Fragment } from 'react'
import {
  Card,
  TextField,
  FormGroup,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Button
} from '@material-ui/core'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

class BeerFinder extends Component {
  state = {
    expanded: false,
    search: false
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  handleChange = () => event => {
    this.setState({ search: !this.state.search })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event.value.beer)
  }
  render() {
    const searchBeerQuery = gql`
      query beerSearch($name: String) {
        beerSearch(query: $name) {
          items {
            name
          }
        }
      }
    `

    const topBeersQuery = gql`
      {
        topBeers {
          items {
            name
            imageUrl
            ibu
            abv
            description
          }
        }
      }
    `
    return (
      <Fragment>
        <div>
          <FormControlLabel
            style={{ marginLeft: 10 }}
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange()}
                value="checkedB"
                color="primary"
              />
            }
            label="Beer Search"
          />
        </div>

        {this.state.search ? (
          <Fragment>
            <Grid>
              <Card raised style={{ width: '99vw' }}>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  style={styles.form}
                >
                  <FormGroup>
                    <TextField
                      name="beer"
                      variant="outlined"
                      style={styles.textField}
                      value={this.state.beer}
                      onChange={this.handleChange}
                      label="Search"
                      placeholder="Search for the beer"
                    />
                  
                        <Button type="submit" style={styles.button}>
                          TADB
                        </Button>
                     
                  </FormGroup>
                </form>
              </Card>
            </Grid>
          </Fragment>
        ) : (
          <Card>
            <Query query={topBeersQuery}>
              {({ loading, error, data }) => {
                if (loading) return 'loading ...'
                if (error) return `Error! ${error.message}`

                return (
                  <div>
                    {data.topBeers.items.map(beer => {
                      console.log(beer.imageUrl)
                      const imageUrl = beer.imageUrl.toString()
                      return (
                        <Card raised key={beer.name}>
                          <Typography>{beer.name} </Typography>

                          <Card>
                            <CardHeader
                              avatar={<Avatar />}
                              action={
                                <IconButton>
                                  <MoreVertIcon />
                                </IconButton>
                              }
                              title="Shrimp and Chorizo Paella"
                              subheader="September 14, 2016"
                            />
                            <CardMedia image={imageUrl} title={beer.name} />
                            <img style={styles.img} src={imageUrl} />
                            <CardContent>
                              <Typography component="p">
                                {beer.description}
                              </Typography>
                            </CardContent>
                            <CardActions disableActionSpacing>
                              <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                              </IconButton>
                              <IconButton aria-label="Share">
                                <ShareIcon />
                              </IconButton>
                              <IconButton
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                              >
                                <ExpandMoreIcon />
                              </IconButton>
                            </CardActions>
                            <Collapse
                              in={this.state.expanded}
                              timeout="auto"
                              unmountOnExit
                            >
                              <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                  Heat 1/2 cup of the broth in a pot until
                                  simmering, add saffron and set aside for 10
                                  minutes.
                                </Typography>
                                <Typography paragraph>
                                  Heat oil in a (14- to 16-inch) paella pan or a
                                  large, deep skillet over medium-high heat. Add
                                  chicken, shrimp and chorizo, and cook,
                                  stirring occasionally until lightly browned, 6
                                  to 8 minutes. Transfer shrimp to a large plate
                                  and set aside, leaving chicken and chorizo in
                                  the pan. Add pimentón, bay leaves, garlic,
                                  tomatoes, onion, salt and pepper, and cook,
                                  stirring often until thickened and fragrant,
                                  about 10 minutes. Add saffron broth and
                                  remaining 4 1/2 cups chicken broth; bring to a
                                  boil.
                                </Typography>
                                <Typography paragraph>
                                  Add rice and stir very gently to distribute.
                                  Top with artichokes and peppers, and cook
                                  without stirring, until most of the liquid is
                                  absorbed, 15 to 18 minutes. Reduce heat to
                                  medium-low, add reserved shrimp and mussels,
                                  tucking them down into the rice, and cook
                                  again without stirring, until mussels have
                                  opened and rice is just tender, 5 to 7 minutes
                                  more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                  Set aside off of the heat to let rest for 10
                                  minutes, and then serve.
                                </Typography>
                              </CardContent>
                            </Collapse>
                          </Card>
                        </Card>
                      )
                    })}
                  </div>
                )
              }}
            </Query>
          </Card>
        )}
      </Fragment>
    )
  }
}

// const styles = theme => ({
//   card: {
//     maxWidth: 400
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%' // 16:9
//   },
//   actions: {
//     display: 'flex'
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest
//     }),
//     marginLeft: 'auto',
//     [theme.breakpoints.up('sm')]: {
//       marginRight: -8
//     }
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)'
//   },
//   avatar: {
//     backgroundColor: red[500]
//   }
// })

export default BeerFinder

// going to hook in apollo here  lets finish this now

const styles = {
  img: {
    margin: 50,
    height: 120
  },
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
