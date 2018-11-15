import React, { Component, Fragment } from 'react'
import {
  Card,
  TextField,
  FormGroup,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Button,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton
} from '@material-ui/core'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

// TODO: consolidate components ie beer cards

class BeerFinder extends Component {
  state = {
    expanded: false,
    search: false,
    beerSearchValue: ''
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  handleSwitch = () => event => {
    this.setState({ search: !this.state.search })
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ beerSearchValue: value })
  }

  handleSubmit = event => {
    event.preventDefault()
  }
  render() {

    let beerSearchValue = this.state.beerSearchValue

    const searchBeerQuery = gql`
     query beerSearch($name: String) {
        beerSearch(query: $name first: 3) {
    			      
          items {
            name,
            brewer{
              name,
              state{
                name
              },
              web
            },
            description,
            abv,
            ibu,
            averageRating,
            overallScore,
            imageUrl,
            purchase {
              price,
              store{
                name,
                url
              }
            }
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
                onChange={this.handleSwitch()}
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
                      name="beerSearchValue"
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
            <Grid><Card>
              <Query query={searchBeerQuery} variables={{ name: beerSearchValue }}>
                {({ data, loading, error }) => {
                  console.log(data, 'data', )
                  if (loading) return <div>loading... </div>;
                  if (error) return <p>ERROR: {error.message}
                  </p>;

                  return (
                   <Fragment>
                      <div>
                        {data.beerSearch.items.map(beer => {
                          console.log(beer.imageUrl)
                          const imageUrl = beer.imageUrl.toString()
                          return (
                            <Fragment>
                              <Card raised key={beer.name}>


                                <Card>
                                  <CardHeader
                                    avatar={<Avatar />}
                                    title={beer.name}
                                    subheader={beer.brewer.name}
                                  />
                                  <CardMedia image={imageUrl} title={beer.name} />
                                  <img style={styles.img} src={imageUrl} />
                                  <CardContent>
                                    <Typography variant="subtitle1">abv: {beer.abv}</Typography>
                                    <Typography component="p">
                                      {beer.description}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Card>
                            </Fragment>
                          )
                        })}
                      </div>
                     </Fragment>
                  );
                }}
              </Query>

            </Card></Grid>
          </Fragment>
        ) : (
            <Card>
              <Typography>Top Beers</Typography>
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
                          <Fragment>
                            <Card raised key={beer.name}>


                              <Card>
                                <CardHeader
                                  avatar={<Avatar />}
                                  title={beer.name}
                                  subheader='brewer to come'
                                />
                                <CardMedia image={imageUrl} title={beer.name} />
                                <img style={styles.img} src={imageUrl} />
                                <CardContent>
                                  <Typography component="p">
                                    {beer.description}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Card>
                          </Fragment>
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
