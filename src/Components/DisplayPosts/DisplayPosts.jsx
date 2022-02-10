import { UpdownButton } from "@lyket/react";
import './DisplayPosts.css';

const DisplayPosts = (props) => {

    return (
    <body>
        {props.parentPosts.map((post) => {
            return ( 
                <div className="form-grid">
                        <div className="form-control" >
                        <h4 className="form-heading">{post.name}</h4>
                        <div className="post-content">{post.post}</div>
                        <UpdownButton hideCounterIfLessThan={2} nameSpace="like-dislike-button" id="like-dislike" className="like-button"/>
                        </div>
                    </div>
                );
            })}
    </body>
    );
}
 
export default DisplayPosts;