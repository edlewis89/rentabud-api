import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { API_URL } from "../../constants.js";

function PostEditForm(){
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const[,setLoading] = useState(true);
    const[,setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`)
                if (response.ok){
                    const json = await response.json();
                    setPost(json);
                }else{
                    throw response;
                }
            }catch(e) {
                setError("An error occurred.  Awkward ...");
                console.log("An Error occurred:", e);
            } finally {
                setLoading(true);
            }

        };
        fetchCurrentPost();
    },[id]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( post)

            });
            if (response.ok){
                const json = await response.json();
                console.log("success:", json);
                navigate(`/posts/${id}`);
            }else{
                throw response;
            }
        }catch(e) {
            setError("An error occurred.  Awkward ...");
            console.log("An Error occurred:", e);
        }
    }

    if (!post) return <h2>Loading ...</h2>;

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">Title:</label>

                    <input id={"post-title"}
                           type={"text"}
                           value={post.title}
                           onChange={(e) => setPost({ ...post, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="post-body">Body:</label>

                    <input id={"post-body"}
                           type={"text"}
                           value={post.body}
                           onChange={(e) => setPost({ ...post, body: e.target.value})}
                    />
                </div>
                <div>
                    <button type={"submit"}>Update Post</button>
                </div>
            </form>
        </div>
    );
}

export default PostEditForm;