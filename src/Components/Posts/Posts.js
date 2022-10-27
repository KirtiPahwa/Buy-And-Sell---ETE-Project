import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import "./Post.css";
import { Firebase } from "../../firebase/config";
import PostCards from "../PostCards/PostCards";

import { AllPostContext } from "../../contextStore/AllPostContext";

function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts] = useState([]); //for showing all posts in Descending order of date
  let [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
  let [loading, setLoading] = useState(false);
  let [loading2, setLoading2] = useState(false);
  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    Firebase.firestore() //retreving all posts from firebase in descending order
      .collection("products")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let allPostsDescendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPosts2(allPostsDescendingOder); //set to post
        setAllPost(allPostsDescendingOder);
        setLoading(false);
      });
    Firebase.firestore() //retreving all posts from firebase in asecnding order of date
      .collection("products")
      .orderBy("createdAt", "asc")
      .get()
      .then((snapshot) => {
        let allPostsAscendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPosts(allPostsAscendingOder);
        setLoading2(false);
      });
  }, [setAllPost]);
  // quickMenuCards assign all cards of post item later it will be displayed
  let quickMenuCards = posts.map((product, index) => {
    return (
      <div className="quick-menu-cards" key={index}>
        {" "}
        <PostCards product={product} index={index} />{" "}
      </div>
    );
  });

  let freshRecomendationCards = posts2.map((product, index) => {
    if (index < 4) {
      return (
        <div className="fresh-recomendation-card" key={index}>
          {" "}
          <PostCards product={product} index={index} />{" "}
        </div>
      );
    }
    return null;
  });
  return (
    <div className="postParentDiv">
      <div
        className="recommendations"
        style={{ marginTop: "10px", backgroundColor: "whitesmoke" }}
      >
        <div className="heading">
          <span
            style={{
              color: "#098bbf",
              fontSize: "30px",
            }}
          >
            Today's Deal
          </span>
        </div>
        <div
          style={{ margin: "0px" }}
          className="fresh-recomendation-cards cards"
        >
          {loading2 ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            freshRecomendationCards
          )}
        </div>
      </div>
      {posts && (
        <div className="moreView">
          <div className="heading">
            <span
              style={{
                color: "#098bbf",
                marginTop: "-60px",
                fontSize: "30px",
              }}
            >
              Based On Last Search
            </span>
            <Link to="./viewmore">
              {" "}
              <span>See more</span>{" "}
            </Link>
          </div>
          <div className="cards">
            {" "}
            {loading ? (
              <div style={{ marginLeft: "46%" }}>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              quickMenuCards
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
