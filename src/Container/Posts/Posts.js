import React, {useEffect} from 'react';
import PostCard from '../../Components/Post/PostCard';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../../Actions/postAction';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div className="py-4">
            <div className='row'>
                {posts.map((postItem, index) => (
                    <PostCard key={index} postItem={postItem}/>
                ))}
            </div>
        </div>
    );
};

export default Posts;
