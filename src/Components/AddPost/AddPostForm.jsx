
import React, { useState } from 'react';

const AddPostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewPostProperty(newEntry)
    }

    return ( 

        <form onSubmit={handleSubmit} className='form-grid' class='rounded'>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
                <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
            </div>
            
            
        </form>
     );
}
 
export default AddPostForm;