import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Layout from '../../components/layout/Layout'
import Card from './components/cards/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

function Home() {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    //  console.log(response)
    if (response.status === 200) {
      // console.log(response.data)
      setBlogs(response.data.data)
    }
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div>
      <Layout>
        <div className='flex flex-wrap justify-center space-x-5 mt-6'>
          {
            blogs.length > 0 && blogs.map((blog ) => {
              console.log();
              return (
                <Card blog={blog} />

              )

            })
          }


        </div>
      </Layout>


    </div>
  )
}

export default Home
