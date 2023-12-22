import axios from 'axios';
import blogFetch from '../axios/config';
import { useState, useEffect } from 'react'    
import { Link } from 'react-router-dom';
import './Home.css'

const home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() =>{
    try {
        // const resposta = await axios.get(
        //   'https://jsonplaceholder.typicode.com/posts/'
        // )
      const resposta = await blogFetch.get('/posts/');
       console.log(resposta);
      const data = resposta.data
      
      setPosts(data);  

    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() =>{
    getPosts();
  }, [])


  return (
    <div className='home'> 
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (<p>não foi carai</p>) : ( 
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )} {/* === 0 ? é quando iniciando : (<p> carregou </p>)  tipo um loader  */}

    </div>
  );
}

export default home