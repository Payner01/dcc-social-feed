
import React, { useState } from 'react';

const AddPostForm = (props) => {

    const [posts, setPosts] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            posts: posts
        };
        console.log(newEntry);
        props.addNewPostProperty(newEntry)
    }

    return ( 

        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' className='form-control'/>
            </div>
            <div className='form-control'>
                <label>Post</label>
                <input type='text' className='form-control'/>
            </div>
            
            
            
            
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
        </form>
     );
}
 
export default AddPostForm;