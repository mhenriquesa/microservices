import React, {useState} from 'react';  
import axios from 'axios';

 export default function PostCreate() {
  const [title, setTitle] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    
    await axios.post('http://localhost:4000/posts', {title})
    setTitle('')
  }
   
  return <div>
    <form action="" method="post" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="">
          Title
        </label>
        <input type="text" className="form-control" value={title} onChange={ e => setTitle(e.target.value) }/>
        <button className='btn btn-primary' type="submit">Submit</button>
      </div>
    </form>
  </div>
};
