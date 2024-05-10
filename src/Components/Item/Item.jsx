import React from 'react'
import './Item.css'

const Item = (props) => {
  const {author, title, imageUrl, content, publishedAt} = props
  console.log("in Item")
  return (
    <div className="cardContainer">
      <div className="cardBody">
         <div className="imageContainer">
             <img src={imageUrl} />
        </div>
         <div className="textContainer">
              <h4>{title}</h4>
              <span>{author}</span>
              <span>{publishedAt}</span>
              <p>{content}</p>
         </div>
      </div>
    </div>
  )
}

export default Item