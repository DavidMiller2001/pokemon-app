import Image from 'next/image'

export const TypeImage = ({ type }) => {
  return (
    <Image
      src={`/img/pokemon-types/pokemon-types-${type}.png`}
      alt='...'
      layout='fixed'
      width='120'
      height='40'
    />
  )
}
