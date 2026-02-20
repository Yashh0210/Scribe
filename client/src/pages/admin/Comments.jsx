import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

    const [comments, setComments] = useState([])
    const [filter, setFilter] = useState('Not Approved')

    const {axios} = useAppContext();

    const fetchComments = async ()=>{
        try {
          const { data } = await axios.get('/api/admin/comments')
          data.success ? setComments(data.comments) : toast.error(data.message)
        } catch (error) {
          toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchComments()
    },[])

  return (
    <div className='flex-1'>
      <div className='flex justify-between items-center max-w-3xl mb-4'>
        <h1 className='text-xl font-semibold text-[#111111]'>Comments</h1>
        <div className='flex gap-3'>
            <button onClick={()=> setFilter('Approved')} className={`border border-[#E5E5E3] rounded-full px-3 py-1 cursor-pointer text-xs font-medium transition-colors ${filter === 'Approved' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'}`}>Approved</button>

            <button onClick={()=> setFilter('Not Approved')} className={`border border-[#E5E5E3] rounded-full px-3 py-1 cursor-pointer text-xs font-medium transition-colors ${filter === 'Not Approved' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'}`}>Not Approved</button>
        </div>
      </div>
      <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white border border-[#E5E5E3] rounded-md scrollbar-hide'>
        <table className="w-full text-sm divide-y divide-[#E5E5E3]">
            <thead className="text-xs text-[#111111] text-left uppercase bg-[#F9F9F8]">
                <tr>
                    <th scope="col" className="px-6 py-3"> Blog Title & Comment </th>
                    <th scope="col" className="px-6 py-3 max-sm:hidden"> Date </th>
                    <th scope="col" className="px-6 py-3"> Action </th>
                </tr>
            </thead>
            <tbody>
                {comments.filter((comment)=>{
                    if(filter === "Approved") return comment.isApproved === true;
                    return comment.isApproved === false;
                }).map((comment, index)=> <CommentTableItem key={comment._id} comment={comment} index={index + 1} fetchComments={fetchComments} />)}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
