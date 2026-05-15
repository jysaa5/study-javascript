import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

const POST_INITIAL = { id: "", title: "", description: "" };

function Home() {
  const [post, setPost] = useState(POST_INITIAL);
  const [posts, setPosts] = useState([]);

  const handleForm = (form) => {
    setPost(form);
  };

  const createPost = () => {
    setPosts((prev) => [...prev, { ...post, id: crypto.randomUUID() }]);
    setPost(POST_INITIAL);
  };

  const deletePost = (id) => {
    setPosts((prev) => [...prev.filter((p) => p.id !== id)]);
  };

  const isCreateDisabled = post.title.trim().length === 0 || post.description.trim().length === 0;

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input form={post} onChange={handleForm} />
        <button data-testid="create-button" className="mt-10" disabled={isCreateDisabled} onClick={createPost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDelete={deletePost} />
      </div>
    </div>
  );
}

export default Home;
