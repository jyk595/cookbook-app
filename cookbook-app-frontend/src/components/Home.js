import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="homepage-container">
        <img src ="http://graphics8.nytimes.com/images/2012/04/15/t-magazine/15remix-selby/15remix-selby-custom2.jpg" alt="intro-img" />
        <img src="http://graphics8.nytimes.com/images/2012/04/15/t-magazine/15remix-selby/15remix-selby-custom1.jpg" alt="into-img-2" />
      </div>
      <div className="homepage-logo">
        <img src="https://i.ibb.co/BwRfMyb/cookbook-logo.png" alt="large-logo" />
      </div>
      <div className="homepage-link-container">
        <Link to="/shopping">
          Take me shopping
        </Link>
      </div>
      <div className="homepage-link-container">
        <Link to="/grocery-list">
          See my grocery list
        </Link>
      </div>
      <div className="homepage-visit-us">

      </div>
    </div>
  )
}

export default Home