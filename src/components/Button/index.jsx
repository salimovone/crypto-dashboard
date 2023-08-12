import React from 'react'
import { Main } from './style'

const Button = (props) => {
  return (
    <Main {...props}>{props.name}</Main>
  )
}

export default Button