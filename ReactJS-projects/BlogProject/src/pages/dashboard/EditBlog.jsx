import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from '../dashboard/components/form/Form'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'


function EditBlog() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        title: '',
        description: '',
        content: '',
        category: '',
        author: ''
    })

    useEffect(() => {
        // Fetch blog data to edit
        const fetchBlog = async () => {
            const response = await axios.get(`${baseUrl}/blog/${id}`)
            if (response.status === 200) {
                setBlog(response.data.data)
            }
        }
        fetchBlog()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${baseUrl}/blog/${id}`, blog)
            navigate(`/blog/${id}`) // Go to the updated blog
        } catch (error) {
            console.error('Error updating blog:', error)
        }
    }

    return (
        <Layout>
            <div className="max-w-3xl mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            value={blog.title}
                            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            value={blog.description}
                            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg"
                            rows="3"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Content</label>
                        <textarea
                            value={blog.content}
                            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg"
                            rows="10"
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Update Blog
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate(`/blog/${id}`)}
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default EditBlog
