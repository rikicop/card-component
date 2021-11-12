import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        console.log("Estatus de Objeto: ", res.statusText);
        if (res.statusText === "OK") {
          return setMsg(true);
        }
        setPosts(res.data.movies);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {msg && <h5> Hey todo bien por aquí! </h5>}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
