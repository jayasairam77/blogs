import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, flag: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    const updatedData = {
      author: blogData.author,
      avatarUrl: blogData.avatar_url,
      content: blogData.content,
      id: blogData.id,
      imageUrl: blogData.image_url,
      title: blogData.title,
      topic: blogData.topic,
    }
    this.setState({blogData: updatedData, flag: false})
  }

  renderResult = () => {
    const {blogData} = this.state
    const {author, avatarUrl, content, id, imageUrl, title, topic} = blogData
    return (
      <div className="blog-data-container">
        <h1>{topic}</h1>
        <div className="blog-data-img-container">
          <img src={avatarUrl} alt={author} className="blog-data-img" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-data-content-img" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {blogData, flag} = this.state

    return (
      <div>
        {flag ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderResult()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
