import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";



const MyPosts = (props) => {

  let postsElements = 
    props.posts.map(p => <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  // console.log(props.newPostText)

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <textarea onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText} />
      </div>
      <div>
        <button onClick={ addPost } >Add post</button>
      </div>
      {/* <button>Remove</button> */}
      <div className={s.posts}>
       
        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts;