const Header = ({className = 'componentHeader'}) => (
  <header className={className}>
    <h1 className={`${className}__title`}>
      G
      <span className={`${className}__title ${className}__title--blue`}>!</span>
      <span className={`${className}__title ${className}__title--yellow`}>f</span>
      <span className={`${className}__title ${className}__title--spacing`}>.me</span>
    </h1>
  </header>
)

export default Header