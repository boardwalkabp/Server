import React from 'react'
import useStateContext from '../hooks/useStateContext'

export default function Clients() {
    const {context} = useStateContext()
    console.log(context)
    
  return (
    <div>
    <h1>Applications</h1>
    <p>Hello from clients {this.props.name} {this.props.children}</p>
    </div>
  )
}
