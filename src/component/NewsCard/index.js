import React from 'react'

const NewsList = ({title, content, image, link }) => {
  return (
    <div className='card-list'>
      <a href={link} target="_blank" rel="noreferrer" className='block-link'>
      <div className='news-image'>
        <img src={image} alt={title}/>
      </div>
      
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div className='text-content'>{content}</div>
        <div className="see-more">See more</div>
      </div>
      </a>
    </div>
  )
}

export default NewsList