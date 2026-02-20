import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {

  const {id} = useParams()

  const {axios} = useAppContext()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async ()=>{
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchComments = async () =>{
    try {
      const { data } = await axios.post('/api/blog/comments', {blogId: id})
      if (data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', {blog: id, name, content});
      if (data.success){
        toast.success(data.message)
        setName('')
        setContent('')
      }else{
         toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  },[])

  return data ? (
    <div className='min-h-screen'>
      <Navbar/>

      <div className='max-w-3xl mx-auto px-5 md:px-0 pt-24'>
        <div className='text-center mb-10'>
          <p className='text-sm text-[#888888] mb-6 font-body'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
          <h1 className='font-heading text-[40px] sm:text-[44px] md:text-[48px] font-normal max-w-3xl mx-auto text-[#111111] leading-tight mb-6'>
            {data.title}
          </h1>
          {data.subTitle && (
            <h2 className='text-lg sm:text-xl text-[#555555] max-w-2xl mx-auto mb-8 font-body leading-relaxed'>
              {data.subTitle}
            </h2>
          )}
          <p className='inline-block py-1.5 px-4 rounded-full mb-10 border border-[#E5E5E3] bg-[#F9F9F8] text-sm text-[#555555] font-medium font-body'>
            Michael Brown
          </p>
        </div>

        <div className='elevated-card p-8 md:p-10 mb-10'>
          <img src={data.image} alt="" className='w-full rounded-lg mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]'/>

          <div className='rich-text' dangerouslySetInnerHTML={{__html: data.description}}></div>

          {/* Comments Section */}
          <div className='mt-16 mb-10'>
            <p className='font-heading text-2xl font-normal text-[#111111] mb-6'>Comments ({comments.length})</p>
            <div className='flex flex-col gap-4'>
                {comments.map((item, index)=>(
                  <div key={index} className='elevated-card p-5'>
                    <div className='flex items-center gap-2 mb-2'>
                      <img src={assets.user_icon} alt="" className='w-6'/>
                      <p className='font-medium text-sm text-[#111111] font-body'>{item.name}</p>
                      <span className='text-xs text-[#888888] ml-auto font-body'>{Moment(item.createdAt).fromNow()}</span>
                    </div>
                    <p className='text-sm text-[#555555] ml-8 leading-relaxed font-body'>{item.content}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Add Comment Section */}
          <div className='mb-10 elevated-card p-6 md:p-8'>
             <p className='font-heading text-2xl font-normal text-[#111111] mb-6'>Add your comment</p>
             <form onSubmit={addComment} className='flex flex-col gap-4'>

                <div className='flex flex-col'>
                  <label className='text-sm font-medium text-[#374151] mb-1 font-body'>Name</label>
                  <input 
                    onChange={(e)=> setName(e.target.value)} 
                    value={name} 
                    type="text" 
                    placeholder='Your name' 
                    required 
                    className='w-full px-3 py-2 text-base border border-[#E5E5E3] rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body'
                  />
                </div>

                <div className='flex flex-col'>
                  <label className='text-sm font-medium text-[#374151] mb-1 font-body'>Comment</label>
                  <textarea 
                    onChange={(e)=> setContent(e.target.value)} 
                    value={content} 
                    placeholder='Write your comment...' 
                    className='w-full px-3 py-2 text-base border border-[#E5E5E3] rounded-md outline-none h-32 resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body leading-relaxed' 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className='bg-primary text-white rounded-md px-5 py-2.5 text-base font-medium hover:bg-[#1d4ed8] transition-colors duration-150 ease-in-out cursor-pointer self-start font-body'
                >
                  Submit
                </button>
             </form>
          </div>

          {/* Share Buttons */}
          <div className='my-16'>
              <p className='font-heading text-xl font-normal text-[#111111] mb-4'>Share this article</p>
              <div className='flex gap-3'>
                <button className='p-2 hover:opacity-70 transition-opacity'>
                  <img src={assets.facebook_icon} width={24} height={24} alt="Share on Facebook" />
                </button>
                <button className='p-2 hover:opacity-70 transition-opacity'>
                  <img src={assets.twitter_icon} width={24} height={24} alt="Share on Twitter" />
                </button>
                <button className='p-2 hover:opacity-70 transition-opacity'>
                  <img src={assets.googleplus_icon} width={24} height={24} alt="Share on Google+" />
                </button>
              </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog
