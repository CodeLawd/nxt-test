import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/planets/?page=1");
  const [loading, setLoading] = useState(false);

  //   FETCHING DATA FROM THE API

  useEffect(() => {
    const fetchPosts = async (URL) => {
      setLoading(true);
      const res = await axios.get(URL);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts(url);
  }, [url]);

  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-dark mb-3">Page {url.slice(-1)}</h4>
          {loading && <h4 className="text-dark mb-3">Loading...</h4>}
        </div>
        <Posts posts={posts} url={url} setUrl={setUrl} />
      </div>
    </div>
  );
};

export default App;
