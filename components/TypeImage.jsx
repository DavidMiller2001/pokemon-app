import React from 'react'

export const TypeImage = ({ type }) => {
  let path = ''

  switch (type) {
    case 'electric':
      path = '../img/pokemon-types/pokemon-types-electric'
  }

  return <img src={path} alt='...' />
}
