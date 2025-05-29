import React from 'react'

const NewsCategory = () => {
  return (
    <div className='flex flex-col  items-start'>
         <div>
             <div className='text-2xl font-bold m-4'>
                CATEGORIES
            </div>
         </div>
        <div className='flex flex-col gap-2.5 items-start m-4'>
            <div>
                GENERAL
            </div>
            <div>
                WORLD
            </div>
            <div>
                BUSINESS
            </div>
            <div>
                TECHNOLOGY
            </div>
            <div>
                ENTERTAINMENT
            </div>
            <div>
                SPORTS
            </div>
            <div>
                SCIENCE
            </div>
            <div>
                HEALTH
            </div>
            <div>
                NATION
            </div>
            <div>
                BOOKMARKS
            </div>
        </div>
    </div>
  )
}

export default NewsCategory