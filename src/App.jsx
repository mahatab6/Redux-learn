import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter'
import Post from './features/posts/post'
import PostForm from './features/posts/PostForm'

function App() {
  return (
    <>
      <div>
        <h1 className=' text-center text-2xl font-bold'>Counter app </h1>
        <Counter/>
        <PostForm/>
        <div>
          <Post/>
        </div>
      </div>
    </>
  )
}

export default App
