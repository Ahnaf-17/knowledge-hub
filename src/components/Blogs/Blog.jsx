// import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaBeer  } from 'react-icons/fa';


const Blog = ({ blog ,handlebookmark }) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handlebookmark(blog)} className='ml-2  text-2xl'><FaBeer></FaBeer></button>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes={
    blog : PropTypes.object.isRequired,
    handlebookmark : PropTypes.func
}

export default Blog;