import { React, useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectFetchItem() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setidFromButtonClick] = useState(1)

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(console.log('done'))
  }, [idFromButtonClick])

  const getDataWithId = () => {
    setidFromButtonClick(id)
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />

        <button type='button' key={id} onClick={getDataWithId}>
          Get Data
        </button>

        <h3>{post.title}</h3>
        <li>{post.body}</li>
      </div>
    </div>
  )
}

export default UseEffectFetchItem
