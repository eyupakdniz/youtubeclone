import React from 'react'
import moment from 'moment'

const SearchCard = ({search}) => {
  return (
    <div onClick={() => window.location = `/videos/${search?.id?.videoId}`} className='flex space-x-2 justify-center mx-4 my-10 cursor-pointer'>
      <img className='h-44 w-72' src={search?.snippet?.thumbnails?.high?.url} alt=''/>
      <div className='w-2/3 space-y-2'>
        <div className='font-bold text-lg'>{search?.snippet?.title}</div>
        <div className='text-sm text-gray-700'>
          <span>3k görüntülenme</span>
          <span>{moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
        </div>
        <div className='flex items-center space-x-2 text-sm'> 
          <div className='w-10 h-10 rounded-full bg-gray-200'></div>
          <div className='text-gray-700'> asdfasd</div>
        </div>
        <div className='text-sm text-gray-700'>{search?.snippet?.description ? search?.snippet?.description : "açıklama yok"}</div>
      </div>
    </div>
  )
}

export default SearchCard
