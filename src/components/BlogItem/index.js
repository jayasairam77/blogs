import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogDetails
  console.log(blogDetails)
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <div className="blog-item-img-container">
          <img src={imageUrl} alt={`item${id}`} className="blog-img" />
        </div>
        <div className="blog-item-text-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="blog-author-container">
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="blog-avatar-img"
            />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
