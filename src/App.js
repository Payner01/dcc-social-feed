import React, {useState} from 'react';
import './App.css';
import AddPostForm from './Components/AddPost/AddPostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name: 'Bryce', post: 'Today is Thursday aka not humpday'}]);

  function addNewPost(post){

    let tempPosts = [post,...posts];

    setPosts(tempPosts);

  }

  return (
    <div className='page'>
      <div className='nav-bar'><NavBar /></div>
        <div className='container-fluid'>
          <div className='form'>
            <AddPostForm addNewPostProperty={addNewPost}/>
          </div>
          <div className='form'>
            <DisplayPosts parentPosts={posts} />
          </div>
        </div>
      
    </div>
  );
}

export default App;
