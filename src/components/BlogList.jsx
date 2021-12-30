import React from 'react';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/blog-list.css';

const BlogList = () => {
  const { data: blogs, isPending, error } = useFetch(`${BASE_URL}/blogs`);

  return (
    <>
      {isPending && <p className="text-center">Loading......</p>}
      {error && <h6 className="text-center">{error}</h6>}

      {blogs &&
        blogs.map((blog, index) => (
          <Col lg="4" md="6" sm="6" key={index} className="mb-5">
            <div className="blog__item">
              <img src={blog.imgUrl} alt="" className="w-100" />

              <div className="blog__info p-3">
                <Link to={`/blog-details/${blog.id}`}>
                  <h6>{blog.title}</h6>
                </Link>
                <p className="section__description">
                  {blog.description.length > 100
                    ? blog.description.substr(0, 100)
                    : blog.description}
                </p>
                <Link to={`/blog-details/${blog.id}`} className="read__more">
                  Read More
                </Link>
                <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                  <span className="author__name">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>
                  <div className=" d-flex align-items-center gap-3">
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i class="ri-calendar-line"></i> {blog.date}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i class="ri-time-line"></i> {blog.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
    </>
  );
};

export default BlogList;
