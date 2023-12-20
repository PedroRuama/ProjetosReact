import axios from 'axios'
import { useState, useEffect } from 'react'    
import { Link } from 'react-router-dom';
// import './Home.css'

const home = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async() =>{
    try {
      const resposta = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      console.log(resposta);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() =>{
    getPosts()
  }, [])


  return (
    <div>home</div>
  )
}

export default home