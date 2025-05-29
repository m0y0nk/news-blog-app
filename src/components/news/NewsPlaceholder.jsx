import React from 'react'
import NewsCard from './NewsCard'
import { demoNews } from './newsInfo'

const NewsPlaceholder = () => {
  return (
    <div className='flex flex-row flex-wrap'>
        {demoNews.map((item) => (
            <NewsCard news_title={item.news_title} news_img={item.news_img} />
        ))}
    </div>
  )
}

export default NewsPlaceholder