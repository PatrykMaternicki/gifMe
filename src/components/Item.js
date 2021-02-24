import placeholderGif from '../assets/placeholder.gif'
import { useState } from 'react'
const Item = ({src, className = 'componentItem'}) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const toggleBackground = () => ({
    backgroundImage: `url(${loaded ? src : placeholderGif})`
  })

  return (
    <div className={className}>
      <figure className={`${className}__figure`} style={toggleBackground()}>
        <img alt='' onLoad={handleLoad} className={`${className}__img`} src={src} />
      </figure>
    </div>
  )
}

export default Item
