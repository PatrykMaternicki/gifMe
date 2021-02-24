const Item = ({src, className = 'componentItem'}) => (
  <div className={className}>
    <figure className={`${className}__figure`}>
      <img className={`${className}__img`} src={src} />
    </figure>
  </div>
)

export default Item
