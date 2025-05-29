import React from 'react'

const NewsCard = ({news_title, news_img}) => {
  return (
    <div className='h-40 w-60 rounded-md mx-2'>
       <div className='object-cover rounded-md'>
            <img src={news_img} alt="" />
        </div>
        <div className='bg-black opacity-50'>
            <h1 className='text-white-light'>{news_title}</h1>
        </div> 
    </div>
  )
}

export default NewsCard