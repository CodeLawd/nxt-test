import React from "react";
import "./Post.css";

const Post = ({ posts, loading, setUrl }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Diameter</th>
            <th scope="col">Gravity</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Terrain</th>
            <th scope="col">Date</th>
            <th scope="col">Population</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {posts.results?.map((post, idx) => (
            <tr key={idx}>
              <td>{post.name}</td>
              <td>{post.diameter}</td>
              <td>{post.gravity}</td>
              <td>{post.orbital_period}</td>
              <td>{post.terrain}</td>
              <td>{post.created.slice(0, -1).split("T")[0]}</td>
              <td>{post.population}</td>
              <td>{post.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 d-flex justify-content-end">
        <nav aria-label="Page navigation example" className="ml-auto">
          <ul className="pagination">
            <li className="page-item">
              <button
                className={`page-link btn mr-4 ${
                  posts.previous === null ? "disabled" : ""
                } }`}
                onClick={() => setUrl(posts.previous)}
              >
                Previous
              </button>
            </li>

            <li className="page-item">
              <button
                className={`page-link btn ${
                  posts.next === null ? "disabled" : ""
                }`}
                onClick={() => setUrl(posts.next)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Post;
