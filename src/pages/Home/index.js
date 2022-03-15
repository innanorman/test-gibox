import React from 'react'
import Navbar from '../../component/Navbar'
import NewsList from '../../component/NewsCard'
import NewsData from '../../data/content.json'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-content">
        <h1 className="title">Welcome to Gibox News</h1>
        <div className="content-text">
          <span className="brand-name">Gibox Digital Asia</span> We build software that focus on web development, mobile development, and big data analytic. We work from ideation and design, to development and optimization. Our mission is to enhance the business operation of our clients by developing and/or implementing premium IT products and services. Currently, we are developing projects from various government institution.
        </div>
        <div className='news-content'>
          <h3>Featured News</h3>
          <div className='card-wrapper'>
            {NewsData?.data?.map((value) => 
              <NewsList 
                key={value.id}
                title={value.title}
                content={value.content}
                image={value.image}
                link={value.link}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home