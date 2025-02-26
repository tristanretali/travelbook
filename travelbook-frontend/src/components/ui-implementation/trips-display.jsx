import React from 'react'
import Card from '../ui/card'
import axios from 'axios'

export default class TripsDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.getTripsUser = this.getTripsUser.bind(this);
  }

  getTripsUser(){
    const url = 'http://localhost:3333/api/trip/show'
    const headers = {'Authorization': 'Bearer ' + this.props.user.token}
    axios.get(url, {headers})
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    this.getTripsUser()
    return(
      <>
        <Card
        user={this.props.user}/>
      </>
    )
  }
}