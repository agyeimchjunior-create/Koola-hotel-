import React from 'react'

const StarRating = () => {
  return (
    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={assets.starIconFilled}
                          alt="star"
                        />
                      ))}
       
    </div>
  )
}

export default StarRating
