// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, clickImageItem, isActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage
  const onClickImageItem = () => {
    clickImageItem(id)
  }
  const activeThumbnail = isActiveThumbnail ? 'thumbnail-list-img-opacity' : ''
  return (
    <li className={`thumbnail-list-img ${activeThumbnail}`}>
      <button className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickImageItem}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
