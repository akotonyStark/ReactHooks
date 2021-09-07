import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong',
      }
    default:
      return initialState
  }
}

function UseReducerFetchData() {
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState('')
  // const [post, setPost] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/3')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        // setLoading(false)
        // setPost(response.data)
        // setError('')
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' })
        // setLoading(false)
        // setPost({})
        // setError('something happened to the api')
      })
  }, [])

  return (
    <div>
      {/* {loading ? 'loadin...' : post.title}
      {error ? error : null} */}

      {state.loading ? 'loadin...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default UseReducerFetchData
