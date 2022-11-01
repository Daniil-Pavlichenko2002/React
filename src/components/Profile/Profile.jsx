// import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state from './../../redux/state';

const Profile = (props) => {
// console.log(state.profilePage);
// debugger;

  return (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} 
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost}/>
      </div>
    )
}

export default Profile;