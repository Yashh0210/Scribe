import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div 
      onClick={()=> navigate(`/blog/${_id}`)} 
      className='w-full elevated-card overflow-hidden cursor-pointer bg-white'
    >
      <img src={image} alt="" className='w-full aspect-video object-cover'/>
      <div className='p-6'>
        <span className='inline-block px-2.5 py-0.5 mb-4 bg-[#F3F4F6] text-[#374151] text-xs font-medium rounded-full font-body'>
          {category}
        </span>
        <h5 className='mb-3 font-heading text-xl font-normal text-[#111111] hover:text-primary transition-colors duration-150 ease-in-out leading-tight'>
          {title}
        </h5>
        <p 
          className='text-sm text-[#555555] line-clamp-2 leading-relaxed font-body' 
          dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}
        ></p>
      </div>
    </div>
  )
}

export default BlogCard
