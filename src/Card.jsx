import React from 'react'
import Images from './Images'

const Card = ({imgsrc=null,sname=null,title=null,link=null}) => {
    
  
  return(
    <>
    <div className="cards">
      <div className="card">
        <Images imgsrc={imgsrc}/>
        <div className="card__info">
          <span className="card__category">{title}</span>
          <h3 className="card__title">{sname}</h3>
          <a href={link} target="_blank">
            <button>WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  </>
  )

}

export default Card
