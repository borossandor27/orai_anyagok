import { useState } from 'react'
import comment from './components/comment'
import Post from './components/post'

import './App.css'

function App() {
 
return (
  
    <>
      <div>
        Módosult a fájl tartalma
      </div>
      
      {comment()}
      <Post title="Post title" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias mollitia blanditiis repellat distinctio ad eos eum asperiores sint explicabo quos, corporis at pariatur sequi rem esse quia quaerat laudantium." />
      <Post title="Another post title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, autem!" />
    </>
  )
}

export default App
