import { graphql, Link, useStaticQuery } from "gatsby"
import "prismjs/themes/prism-okaidia.css"
import React from "react"
import Navigation from "../components/navigation"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {fullYear} Vinícius Zomer &bull; Theme by{" "}
          <a href="https://w3layouts.com">W3Layouts</a>
        </p>
      </footer>
    </div>
  )
}
