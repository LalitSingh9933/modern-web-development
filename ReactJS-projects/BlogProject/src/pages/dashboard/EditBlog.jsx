import React, { useState, useEffect } from 'react'
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
        subtitle: '',
        description: '',
        category: '',
        image: null
    })

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${baseUrl}/blog/${id}`)
                if (res.status === 200) {
                    setBlog(res.data.data)
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchBlog()
    }, [id])

    const handleUpdate = async (formData) => {
        try {
            const data = new FormData()
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key])
            })

            const response= await axios.patch(`${baseUrl}/blog/${id}`, data, {
                headers: {
            
                    "Authorization": localStorage.getItem('token')
                }
            },blog)
            if(response.status===200){
  navigate(`/blog/${id}`)
            }
          
        } catch (error) {
            console.error('Error updating blog:', error)
        }
    }

    return (
        <Layout>
            <Form
                type="Edit"
                initialData={blog}
                onSubmit={handleUpdate}
            />
        </Layout>
    )
}

export default EditBlog
