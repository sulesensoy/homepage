import React from 'react'
import Url from 'url'
import dayjs from 'dayjs'

import { Link } from './index'

import styles from './blog-post.module.css'
import { graphql } from 'gatsby'

function BlogPost({ title, url, date }) {
  const { host } = Url.parse(url)

  return (
    <article className={styles.post}>
      <header>
        <Link url={url}>
          <h3 className={styles.title}>{title}</h3>
          {/*<p className={styles.desc}>{desc}</p>*/}
        </Link>
      </header>
      <footer className={styles.footer}>
        <span>
          {dayjs(date)
            .locale('tr')
            .format('D MMMM')}
        </span>
        {' • '}
        <span>{host}</span>
      </footer>
    </article>
  )
}

export const query = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    frontmatter {
      title
      desc
      url
      date
    }
  }
`

export default BlogPost
