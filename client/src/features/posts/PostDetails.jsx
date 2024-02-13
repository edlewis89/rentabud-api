import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PostDetails(){
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const[,setLoading] = useState(true);
    const[,setError] = useState(null);

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

    if (!post) return <h2>Loading ...</h2>;

    return (
        <div>
            <div key={post.id} className="post-container">
                <h2>
                    {post.title}
                </h2>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
    );
}

export default PostDetails;