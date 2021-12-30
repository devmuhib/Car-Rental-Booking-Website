import React, { useEffect } from 'react';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import '../styles/blog-details.css';

import Cimg01 from '../assets/img/ava-1.jpg';
import BlogDetailsLeft from '../components/BlogDetailsLeft';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`${BASE_URL}/blogs/${id}`);

  const submitHandler = e => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);
  return (
    <section>
      <Container>
        <Row>
          {isPending && <p className="text-center">Loading......</p>}
          {error ? (
            <h6 className="text-center">{error}</h6>
          ) : (
            <>
              <Col lg="8" md="8">
                <div className="blog__details">
                  <img src={blog.imgUrl} alt="" className="w-100" />
                  <h4 className="section__title mt-4">{blog.title}</h4>

                  <div className="mb-4 d-flex align-items-center gap-4 blog__publisher">
                    <span className="author__name">
                      <i class="ri-user-line"></i> {blog.author}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i class="ri-calendar-line"></i> {blog.date}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i class="ri-time-line"></i> {blog.time}
                    </span>
                  </div>

                  <p className="section__description">{blog.description}</p>
                  <h6 className=" fw-normal ps-5">
                    <blockquote>{blog.quote}</blockquote>
                  </h6>

                  <p className="section__description">{blog.description}</p>
                </div>

                <div className="comment__list mt-5">
                  <h4 className="mb-5">3 Comments</h4>
                  <div className="single__comment d-flex  gap-3">
                    <img src={Cimg01} alt="" />

                    <div className="comment__content">
                      <h6>David Kamal</h6>
                      <p className="section__description mb-0">21 Dec, 2021</p>
                      <p className="section__description ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nulla quis quod saepe, quas commodi voluptas
                        obcaecati repudiandae omnis exercitationem accusamus.{' '}
                      </p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i class="ri-reply-line"></i> Replay
                      </span>
                    </div>
                  </div>

                  <div className="leave__comment__form mt-5">
                    <h5>Leave a Comment</h5>
                    <p className="section__description">
                      Your must sing-in to make or comment a post
                    </p>
                    <Form onSubmit={submitHandler}>
                      <FormGroup className=" d-flex gap-3">
                        <Input type="text" placeholder="Name" required />
                        <Input type="text" placeholder="Email" required />
                      </FormGroup>
                      <FormGroup>
                        <textarea
                          name=""
                          id=""
                          rows={5}
                          className="w-100 py-2 px-3 textarea"
                          placeholder="Comment..."
                          required
                        ></textarea>
                      </FormGroup>
                      <button className="btn mt-4">Post a Comment</button>
                    </Form>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="recent__post">
                  <h6>Recent Posts</h6>
                </div>
                <BlogDetailsLeft />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
