import React, {useState} from 'react';
import './App.css';
import AddPostForm from './Components/AddPost/AddPostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name: 'Bryce Payne', post: 'Today is Wednesday aka HUMPDAY!!'},{name: 'Alex Johnson', post: 'Today I am under cover...'},{name: 'Jeff Bezo', post: 'Hello Everyone'},{name: 'Jeff Johnson', post: 'Blue is my favorite color'}]);

  function addNewPost(post){

    let tempPosts = [post,...posts];

    setPosts(tempPosts);

  }

  return (
    
      <><div className='nav-bar'><NavBar /></div><div className='page'>
      <div className='container'>
        <div className='form'>
          <AddPostForm addNewPostProperty={addNewPost} />
        </div>
        <div className='form'>
          <DisplayPosts parentPosts={posts} />
        </div>
      </div>
    </div></>
  );
}

export default App;
