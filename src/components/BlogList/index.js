// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], flag: true}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogList: updatedData, flag: false})
  }

  render() {
    const {blogList, flag} = this.state
    return (
      <div className="bloglist-container">
        {flag ? (
          <Loader type="TailSpin" color="black" height={50} width={50} />
        ) : (
          blogList.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
