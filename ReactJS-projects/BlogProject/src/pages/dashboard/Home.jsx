import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/cards/Card'
import axios from 'axios'
import { baseUrl } from '../../config'
import { Link } from 'react-router-dom'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog`)
      if (response.status === 200) {
         const sortedBlogs=(response.data.data || response.data)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
         setBlogs(sortedBlogs)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
      

        {/* Blog List */}
        {loading ? (
          <div className="text-center py-10">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No blogs yet. <Link to="/blog/add" className="text-blue-600 hover:underline">Create one!</Link>
          </div>
        ) : (
          <div>
            {blogs.map(blog => (
              <Card key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Home
