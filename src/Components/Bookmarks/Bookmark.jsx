import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='border-2 border-gray-400 rounded-xl bg-base-200 p-2 mb-2'>
            <h1 className='font-bold text-base'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;