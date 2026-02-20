import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })

    const { axios } = useAppContext()

     const fetchDashboard = async ()=>{
       try {
         const {data} = await axios.get('/api/admin/dashboard')
         data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
       } catch (error) {
            toast.error(error.message)
       }
     }

     useEffect(()=>{
        fetchDashboard()
     },[])

  return (
    <div className='flex-1'>

        <div className='flex flex-wrap gap-4 mb-8'>

            <div className='flex items-center gap-4 bg-white p-5 min-w-[200px] rounded-md border border-[#E5E5E3] cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 ease-in-out'>
                <img src={assets.dashboard_icon_1} alt="" />
                <div>
                    <p className='text-xl font-medium text-[#111111] font-body'>{dashboardData.blogs}</p>
                    <p className='text-sm text-[#888888] font-body'>Blogs</p>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-white p-5 min-w-[200px] rounded-md border border-[#E5E5E3] cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 ease-in-out'>
                <img src={assets.dashboard_icon_2} alt="" />
                <div>
                    <p className='text-xl font-medium text-[#111111] font-body'>{dashboardData.comments}</p>
                    <p className='text-sm text-[#888888] font-body'>Comments</p>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-white p-5 min-w-[200px] rounded-md border border-[#E5E5E3] cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 ease-in-out'>
                <img src={assets.dashboard_icon_3} alt="" />
                <div>
                    <p className='text-xl font-medium text-[#111111] font-body'>{dashboardData.drafts}</p>
                    <p className='text-sm text-[#888888] font-body'>Drafts</p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex items-center gap-3 mb-4'>
                <img src={assets.dashboard_icon_4} alt="" />
                <p className='font-heading text-xl font-normal text-[#111111]'>Latest Blogs</p>
            </div>

            <div className='relative max-w-4xl overflow-x-auto border border-[#E5E5E3] rounded-md bg-white'>
                <table className='w-full text-sm divide-y divide-[#E5E5E3]'>
                    <thead className='text-xs text-[#111111] text-left uppercase bg-[#F9F9F8]'>
                        <tr>
                            <th scope='col' className='px-4 py-3 xl:px-6'> # </th>
                            <th scope='col' className='px-4 py-3'> Blog Title </th>
                            <th scope='col' className='px-4 py-3 max-sm:hidden'> Date </th>
                            <th scope='col' className='px-4 py-3 max-sm:hidden'> Status </th>
                            <th scope='col' className='px-4 py-3'> Actions </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-[#E5E5E3]'>
                        {dashboardData.recentBlogs.map((blog, index)=>{
                            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
