import React from 'react';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import { Container, Row } from 'reactstrap';
import BlogList from '../components/BlogList';

const Blogs = () => {
  return (
    <Helmet title="Blogs">
      <section className="pt-0">
        <CommonSection title="Blogs" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blogs;
