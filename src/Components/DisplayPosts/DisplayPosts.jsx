// import { UpdownButton } from "@lyket/react"; 
// used for new like dislike button
import './DisplayPosts.css';
import LikeDislikeButton from "../LikeButton/LikeButton";

const DisplayPosts = (props) => {

    

    return (
    <body>
        {props.parentPosts.map((post) => {
            return ( 
                <div className="form-grid">
                        <div className="form-control" >
                        <h4 className="form-heading">{post.name}</h4>
                        <div className="post-content">{post.post}</div>                       
                        <LikeDislikeButton />
                        </div>
                    </div>
                );
            })}
    </body>
    );
}
 
export default DisplayPosts;