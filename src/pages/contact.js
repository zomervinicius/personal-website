import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
  const [status, setStatus] = useState('');
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={`Contact page of ${site.siteMetadata.description}`}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0
          }}
        >
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            onSubmit={submitForm}
            action="https://formspree.io/xdowaala"
            method="post"
          >
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="_replyto" required id="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" required id="message" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {status === 'SUCCESS' ? (
                <p>Thanks!</p>
              ) : (
                <input
                  type="submit"
                  className="button -primary"
                  style={{ marginRight: 0 }}
                />
              )}
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
