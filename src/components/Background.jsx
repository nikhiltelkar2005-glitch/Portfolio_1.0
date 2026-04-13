const Background = () => {
  return (
    <div className="bg-container">
      <div className="noise"></div>
      <div className="stars"></div>
      
      {/* Dense layered orbits */}
      <div className="orbit orbit-1 orbit-rotate" style={{ animationDuration: '60s' }}>
        <div className="planet"></div>
      </div>
      <div className="orbit orbit-2 orbit-rotate" style={{ animationDuration: '80s' }}></div>
      <div className="orbit orbit-3 orbit-rotate" style={{ animationDuration: '100s' }}></div>
      <div className="orbit orbit-4 orbit-rotate" style={{ animationDuration: '120s' }}></div>
      <div className="orbit orbit-5 orbit-rotate" style={{ animationDuration: '140s' }}></div>
      <div className="orbit orbit-6 orbit-rotate" style={{ animationDuration: '160s' }}></div>
      <div className="orbit orbit-7 orbit-rotate" style={{ animationDuration: '180s' }}></div>
    </div>
  )
}

export default Background
