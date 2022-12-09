/* eslint-disable react/prop-types */
import React from 'react';
import PostItem from './PostItem';

export default function Posts({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <PostItem post={p} />
      ))}
    </div>
  );
}
