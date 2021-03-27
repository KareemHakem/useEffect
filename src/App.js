// eslint-disable-next-line
import { useEffect, useState } from "react";

import "./App.css";
import Card from "./Components/card";
import { getUsers } from "./requests/users";
import {getPosts} from "./requests/posts"
import Post from "./Components/Post"
// axios

function App() {
  const [users, setUsers] = useState([]);
  const [postError, setPostError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getPosts()
    .then((res)=>setPosts(res))
    .catch((err)=>setPostError(err))
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      {posts.map((post) =>(
        <Post key={post.id} post={post} />

      ))}
      {postError && <p>Error</p>}
    </div>
  );
}

export default App;
