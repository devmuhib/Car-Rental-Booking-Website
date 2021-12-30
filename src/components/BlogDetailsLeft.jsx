import React from 'react';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';

import { Link } from 'react-router-dom';

const BlogDetailsLeft = () => {
  const { data: blogs } = useFetch(`${BASE_URL}/blogs/`);
  return (
    <>
      {blogs &&
        blogs.map((blog, index) => (
          <div className="recent__post mt-4" key={index}>
            <div className="recent__post__item d-flex  gap-3">
              <img src={blog.imgUrl} alt="" className="w-25" />
              <h6>
                <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
              </h6>
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogDetailsLeft;
