/* eslint-disable no-dupe-class-members */
// eslint-disable-next-line
import { Component, useEffect } from "react";

import "./App.css";
import Card from "./Components/card";
import { getUsers } from "./requests/users";
import { getPosts } from "./requests/posts";
import Post from "./Components/Post";
// axios

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
    };
  }

  // useEffect(()=>{},[])  === componentDidMount() // fetch()

  componentDidMount() {
    // using Axios
    getUsers()
      .then((res) => this.setState({ users : res}))
      .catch((err) => console.log(err));

    // using fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => this.setState({posts : res}))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.users);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* <App2 /> */}
        {this.state.users?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
        {this.state.posts?.map((post) =>(
        <Post key={post.id} post={post} />

      ))}
      {/* {postError && <p>Error</p>} */}
      </div>
    );
  }
}

export default App;

