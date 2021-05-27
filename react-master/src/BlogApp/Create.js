import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added.');
            history.push('/');
        })
    }

    return (<div className="create">
        <h2>Create Blog</h2>
        <form onSubmit={handleClick} >
            <label htmlFor="Title">Title</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="Body">Body</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <label htmlFor="Author">Author</label>
            <select
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add New</button>
        </form>
    </div>);
}

export default Create;