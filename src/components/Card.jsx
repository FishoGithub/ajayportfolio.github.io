import React from 'react'

interface CardProps {
    image: string; 
}

const Card: React.FC<CardProps> = ({image}) => {
  return (
    <div>
      <Image src={image} alt={image} style={{objectFit: "cover"}} />
    </div>
  )
}

export default Card
