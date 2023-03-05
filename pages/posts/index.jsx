import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export async function getServerSideProps(context) {
  console.log(context, "COntext Over hereee")

  const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'ar',
      "blogCategoryId": 0,
      "currentPage": 1
    })
  })
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}

const Posts = ({ blogs }) => {
  console.log(blogs.length)
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={blogs.length} color="primary" />
      </Stack>

      {/* {blogs.map((blog, idx) => (
        <h1 key={idx}>{blog.title}</h1>
      ))} */}

    </>
  )
}

export default Posts