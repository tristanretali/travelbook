import React from 'react'
import Card from '../ui/card'

export default class TripsDisplay extends React.Component{
  render() {
    return(
      <>
        <Card
        user={this.props.user}/>
      </>
    )
  }
}