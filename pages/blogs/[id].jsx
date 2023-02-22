import React from 'react'

export default function BolgDetails(props) {
  return (
    <h1>Hello</h1>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const data = await res.json()

//   return {
//     pops: {
//       post: data
//     }
//   }
// }