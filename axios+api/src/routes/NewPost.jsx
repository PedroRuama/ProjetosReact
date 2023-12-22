import './NewPost.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) =>{
    e.preventDefault()
    const post = {title, body, userId : 1}

    await blogFetch.post('/posts', {
      body: post,
    }) //resposta em Network response, já seria enviado

    
  }
  return (
    <div className='newpost'>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Títlo:</label>
          <input
            type="text" 
            name='tilte' 
            id='title' 
            placeholder='Digite o título'
            onChange={(e)=> setTitle(e.target.value)}
          />

          <label htmlFor="body">Conteúdo:</label>
          <textarea 
            name="body" 
            id="body" 
            placeholder='Digite o coteúdo'
            onChange={(e)=> setBody(e.target.value)}>              
          </textarea>
            
          <input type="submit" value="Criar Post" className='btn'/>
        </div>
      </form>
    </div>
  )
}

export default NewPost