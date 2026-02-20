import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListBlog = () => {

 const [blogs, setBlogs] = useState([]);
 const {axios} = useAppContext()

 const fetchBlogs = async () =>{
    try {
        const {data} = await axios.get('/api/admin/blogs')
        if(data.success){
            setBlogs(data.blogs)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
 }

 useEffect(()=>{
    fetchBlogs()
 },[])

  return (
    <div className='flex-1'>
        <h1 className='text-xl font-semibold text-[#111111] mb-4'>All blogs</h1>

        <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto border border-[#E5E5E3] rounded-md scrollbar-hide bg-white'>
                <table className='w-full text-sm divide-y divide-[#E5E5E3]'>
                    <thead className='text-xs text-[#111111] text-left uppercase bg-[#F9F9F8]'>
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
                            <th scope='col' className='px-2 py-4'> Blog Title </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
                            <th scope='col' className='px-2 py-4'> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index)=>{
                            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1}/>
                        })}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ListBlog
