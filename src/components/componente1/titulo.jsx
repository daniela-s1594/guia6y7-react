import React from 'react'
import { PropTypes } from 'prop-types'

export const FirstApp = ({tittle,subtitle}) => {
  return (
    <>
        <h1>{tittle}</h1>
        <h2>{subtitle}</h2>
    </>
  )
}

FirstApp.PropTypes ={
    tittle: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

