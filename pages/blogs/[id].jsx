import React from 'react'

export default function BolgDetails(props) {
  console.log(props.post)
  return (
    <>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </>
  )
}

// Every time that user click on the post it will call  API Request
// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const data = await res.json()

//   return {
//     props: {
//       post: data
//     }
//   }
// }

// Error: getStaticPaths is required for dynamic SSG pages and is missing for
// it will get all Posts Id and save it as an id => if i have 10 posts and all i want is id's of the 10 posts it will get  all id's at once
export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const data = await res.json()

  return {
    props: {
      post: data
    }
  }
}

{/*
  here to get all paths id's =>
   paths: [  
    {params : { id : 1 }},
    {params : { id : 2 }},
    {params : { id : 3 }},
    {params : { id : 4 }},
    {params : { id : 5 }},
   ]

*/}
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=100`)
  const data = await res.json()


  // here to get all paths id dynamic
  const paths = data.map((path) => {
    return { params: { id: `${path.id}` } }
  })
  return {
    paths: paths,

    // fallback used for => if we don't have id = 50 it will throw an error
    fallback: false,
  }
}