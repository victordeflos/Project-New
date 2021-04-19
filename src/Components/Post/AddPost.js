import React, { useState } from 'react';
import shortid from 'shortid';
import { createPost } from '../../Actions/postAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(), // zosto koristam backend ID (ova za lokalno koristenje na DATA)
      title: title,
      body: body,
    };

    dispatch(createPost(new_post));
    history.push('/posts');
  };
  return (
    <div className='container'>
      <div className='py-3'>
        <div className='card shadow'>
          <div className='card-header'>Add A Post</div>
          <div className='card-body'>
            <form onSubmit={submitForm}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Enter Post Title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <textarea
                  rows='5'
                  className='form-control form-control-lg'
                  placeholder='Enter Post Body Text'
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
              <button className='btn btn-info btn-lg'>Add New Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
