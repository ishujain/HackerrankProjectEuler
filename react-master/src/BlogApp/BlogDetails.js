import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('delete done');
            history.push('/');
        })
    }
    return (<div className="blog-details">
        {error && <h2>Page Load Error:{error}</h2>}
        {isPending && <div>Loading....</div>}
        {blog &&
            <article>
                <h2>{blog.title}</h2>
                <p>Written by author : {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete Blog</button>
            </article>
        }
    </div>);
}

export default BlogDetails;