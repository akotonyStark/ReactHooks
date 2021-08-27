import { React, useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectFetchItem() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts((prevData) => res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(console.log('done'))
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div>
          <li>
            <h3>{post.id}</h3>
          </li>
          <li>{post.body}</li>
        </div>
      ))}
    </div>
  )
}

export default UseEffectFetchData
