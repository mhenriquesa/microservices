import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CommentsList ({postId}) {
  const [comments, setComment] = useState([]);

  
  const fetchData = async() => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

    setComment(res.data)
  }

  useEffect(() => {
    fetchData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const renderedComments = Object.values(comments).map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })
  
  
  
  return <ul>{renderedComments}</ul>
}