import React from 'react'
import './Item.css'

const Item = (props) => {
  const {author, title, imageUrl, publishedAt} = props
  console.log("in Item")
  return (
    <div className="cardContainer">
      <div className="cardBody">
         <div className="imageContainer">
             <img src={imageUrl} />
        </div>
         <div className="textContainer">
              <h6>{title}</h6>
              <span style={{fontSize:'15px', color:'grey', marginTop:'5%'}}>{author}</span>
              <span style= {{fontSize:'15px', color:'grey', marginTop:'2%'}}>{publishedAt}</span>
         </div>
      </div>
    </div>
  )
}

export default Item