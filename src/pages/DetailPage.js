import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPageMain from "../components/DetailPageMain";
import PostsListEmpty from "../components/PostsListEmpty";
import CONFIG from "../global/config";

function DetailPage() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGetPosts = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/posts/${id}`);
        console.log("Respons API:", res.data);

        if (res.data && res.data.data) {
          console.log("Nilai res.data.data:", res.data.data);
          setPosts(res.data.data);
          setLoading(false);
        } else {
          setError("Data not found");
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGetPosts();
  }, [id]);

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return posts.length !== 0 ? (
    <DetailPageMain posts={posts} />
  ) : (
    <PostsListEmpty />
  );
}

export default DetailPage;
