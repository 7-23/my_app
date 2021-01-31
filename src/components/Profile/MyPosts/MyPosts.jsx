import React from 'react';
import { addPostActionCreator, apdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(apdateNewPostTextActionCreator(text));

    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />

                </div>
                <div>
                    <button onClick={ addPost } >
                        Add post
                    </button>
                </div>
            </div>
            <div ClassName={s.posts}>
                { postElements }
            </div>
        </div>
    );
}
export default MyPosts;