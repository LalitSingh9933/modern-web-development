import React, { useEffect, useState } from 'react'
import Layout from "../../components/layout/Layout"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'
function SingleBlog() {

  const {id}=useParams()
  // console.log(id)
  const[blog,setBlog]=useState({})
  const fetchBlogs =async ()=>{
  const response = await axios.get(`${baseUrl}/blog/${id}`)
  if(response.status===200){
    setBlog(response.data.data);
  }
  }
  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div>
      <Layout>
 
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">

        {/* Blog Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Blog"
          className="w-full h-72 object-cover"
        />

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Blog Title Goes Here
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            This is the subtitle of the blog post
          </h2>

          {/* Meta Info */}
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <span>By Admin</span>
            <span className="mx-2">•</span>
            <span>Sep 20, 2025</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse potenti. Integer nec urna nec urna placerat 
            convallis. Donec euismod, nisi vel consectetur interdum, 
            nisl felis aliquam justo, nec ultricies sapien lorem non odio.
            <br /><br />
            Vivamus laoreet, purus non facilisis tempor, justo augue 
            tristique lectus, sed porta elit felis non nunc. Curabitur 
            fermentum, sapien vel lacinia gravida, elit ipsum bibendum arcu,
            vitae bibendum magna turpis at lacus.
          </p>

          {/* Divider */}
          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Link to="/blog/edit">
              <button className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
              Edit Blog
            </button>

            </Link>
          
            <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </div>
        </Layout>
    </div>
  )
}

export default SingleBlog
