import PropTypes  from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-xl mt-10 ml-5">
            <div>
                <he className="text-4xl">Reading time: {readingTime}</he>
            </div>
            <h2 className='text-3xl text-center mt-5'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
