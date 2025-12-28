import React, { useEffect, useState } from 'react'
import Layout from "../../components/layout/Layout"
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'

function SingleBlog() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog/${id}`)
      if (response.status === 200) {
        setBlog(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`${baseUrl}/blog/${id}`)
        navigate('/') // Redirect to home after deletion
      } catch (error) {
        console.error('Error deleting blog:', error)
      }
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [id])

  if (loading) return <Layout><div className="text-center py-10">Loading...</div></Layout>
  if (!blog) return <Layout><div className="text-center py-10">Blog not found</div></Layout>

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8 px-4">

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex items-center text-gray-600 mb-8">
          <span className="font-medium">{blog.author || 'Anonymous'}</span>
          <span className="mx-2">•</span>
          <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full mb-8 rounded-lg"
          />
        )}

        <div className="text-lg leading-relaxed text-gray-800">
          {blog.content || blog.description}
        </div>

        {/* Blog Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 pt-8 border-t flex justify-between items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            ← Back to all blogs
          </Link>

          <div className="flex gap-3">
            <Link
              to={`/blog/edit/${blog._id}`}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Edit Blog
            </Link>

            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
            >
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleBlog