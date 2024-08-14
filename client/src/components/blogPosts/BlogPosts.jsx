import BlogPost from './blogPost/BlogPost'
import './blogPosts.css';
const BlogPosts = () => {
  return (
    <div className='all_posts'>
      <h1>Latest Blogs</h1>
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
    </div>
  )
}

export default BlogPosts