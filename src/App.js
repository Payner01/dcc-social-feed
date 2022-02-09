import React, {useState} from 'react';
import './App.css';
import AddPostForm from './Components/AddPost/AddPostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{name: 'Bryce', postEntry: 'today is wednesday aka humpday'}]);

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts);

  }

  return (
    <div className='container-fluid'>
      <div className='form'>
        <AddPostForm addNewPostProperty={addNewPost}/>
      </div>
      <div className='feed'>
        <DisplayPosts parentPosts={posts} />
      </div>
      
    </div>
  );
}

export default App;
