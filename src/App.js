import React, {useState} from 'react';
import './App.css';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {

  const [posts, setPosts] = useState([{name: 'Bryce', post: 'today is wednesday aka humpday'}]);

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts);

  }

  return (
    <div>
      <AddPostForm addNewPostProperty={addNewPost}/>
    </div>
  );
}

export default App;
