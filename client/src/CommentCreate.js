import axios from 'axios';
import React, {useState} from 'react';

export default function CommentCreate({postId}) {
  const [content, setContent] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault()
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})

    setContent('')
  }

  return <div>
    <form action="" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="">New Comment</label>
        <input value={content} onChange={e => setContent(e.target.value)} className='form-control'/>
      </div>
      <button className="btn btn-primary">Submmit</button>
    </form>
  </div>
};
