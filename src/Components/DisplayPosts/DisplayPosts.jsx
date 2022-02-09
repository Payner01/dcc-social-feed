
const DisplayPosts = (props) => {

    return (
        <body>
    {props.parentPosts.map((post) => {
        return ( 
            <div className="media" class='border'>
                    <div class="form-control">
                    <h4 class="media-heading">{post.name}</h4>
                    <div><p>{post.postEntry}</p></div>
                    </div>
                </div>
             );
        })}
    </body>
    );
}
 
export default DisplayPosts;