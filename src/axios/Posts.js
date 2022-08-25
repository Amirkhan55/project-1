import React from "react";
import Axios from "axios";
import "./card.css";
export const Posts = ({ posts, loading, truncate }) => {
  if (loading) {
    return <h2>loading</h2>;
  }
  return (
    <div className="grid-container" mt-5>
      {posts.map((curElement) => {
        return (
          <div className="grid-item">
            <div className="card p-2">
              <div className="d-flex align-item-center">
                <div className="image">
                  <img src="assets/person.png" class="rounded" width="155" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0  textleft">{curElement.id}</h4>
                  <span className="textLeft">{truncate(curElement?.body)}</span>
                  <div className="p-2 mt-2  d-flex justify-content-between rounded text-while status">
                    <div className="d-flex flex-column">
                      <span className="articles"> Articles </span>
                      <span className="number1"> 38 </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers"> Followers </span>{" "}
                      <span className="number2"> 980 </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="rating"> Rating </span>{" "}
                      <span className="number3"> 8.9 </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
