import { UpdownButton } from "@lyket/react";


const DisplayPosts = (props) => {

    return (
    <body>
        {props.parentPosts.map((post) => {
            return ( 
                <div className="media" class='border'>
                        <div class="form-control">
                        <h4 class="media-heading">{post.name}</h4>
                        <div>{post.post}</div>
                        <UpdownButton namespace="like-dislike-button" id="like-dislike"/>
                        </div>
                    </div>
                );
            })}
    </body>
    );
}
 
export default DisplayPosts;