function Footer() {
  return (
    <footer>
      <img className="footer-promo-img" src="http://graphics8.nytimes.com/images/2012/04/15/t-magazine/15remix-selby/15remix-selby-custom3.jpg" alt="promo-img"/>
      <div>
        <img className="footer-logo" src="http://cookbookla.com/images/cookbook.RGB.2.new.jpg" alt="cookbook-logo" />
        <a href="https://goo.gl/maps/6XG7ZhHRHWvKjZYr8">
          <h4>Echo Park</h4>
          <p>1549 Echo Park Ave.</p>
          <p>Los Angeles, CA 90026</p>
          <p className="hours">Open Daily 8AM-8PM</p>
        </a>
      </div>
      <div>
        <a href="https://goo.gl/maps/fhQSBiUHrxu5hptz8">
          <h4>Highland Park</h4>
          <p>5611 N Figueroa St.</p>
          <p>Los Angeles, CA 90042</p>
          <p className="hours">Open Daily 8AM-8PM</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer