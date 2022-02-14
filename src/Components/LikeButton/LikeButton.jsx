import React, { useState } from 'react';


const LikeDislikeButton = () => {

    const [like,setlike] = useState('')
    const [dislike,setdislike] = useState('')
  
    const [likeactive,setlikeactive] = useState(false)
    const [dislikeactive,setdislikeactive] = useState(false)

    function likef(){
        if(likeactive){
          setlikeactive(false)
        }else{
          setlikeactive(true)
          if(dislikeactive){
            setdislikeactive(false)
          }
        }
      }

      function dislikef(){
        if(dislikeactive){
          setdislikeactive(false)
        }else{
          setdislikeactive(true)
          if(likeactive){
            setlikeactive(false) 
          }
        }
      }  

      

    return ( 

        <div className="App">
        <div></div>
        <button onClick={likef} className='btn btn-secondary'>Like {like}</button>
        <button onClick={dislikef} className='btn btn-secondary'>Dislike {dislike}</button>
        <div></div>
      </div>
        
     );
}
 
export default LikeDislikeButton;