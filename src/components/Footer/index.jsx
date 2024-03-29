import "./footer.css";
import { ForwardOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="">
      <div className="footer-top footer-sky footer-sky-v4">
        <div className="container">
          <div>
            <div className="footer-top text-center">
              <div className="icon-email">
                <a href="/" title="Email">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/footer-top-icon-l.png"
                    alt="Email"
                    className="img-responsive"
                  />
                </a>
              </div>
              <h2>NEWS &amp; OFFERS</h2>
              <p>
                Enjoy many benefits and receive our promotions and special
                offers directly
              </p>
              <div className="textbox">
                <div className="">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control text-white"
                      placeholder="Your email address"
                      aria-label="Search for..."
                    />
                    <button className=" btn-footer" type="button">
                      <span className="forwar">
                        <ForwardOutlined />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="footer-bottom bottom-v3">
              <div className="d-md-flex">
                <div className="col-xs-12 col-md-6">
                  <div className="footer-bottom-l">
                    <a
                      href="https://thietkeweb9999.com/thiet-ke-web/khach-san-44"
                      title="Thiết kế web khách sạn"
                      rel="dofollow noreferrer"
                      target="_blank"
                      style={{ border: "none" }}
                    >
                      Thiết kế
                    </a>{" "}
                    bởi{" "}
                    <a
                      href="/"
                      title="Thiết kế web khách sạn"
                      rel="dofollow noreferrer"
                      target="_blank"
                      style={{ border: "none" }}
                    >
                      GIANG
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="payments justify-content-end">
                    <div className="row payments__Content">
                      <li className="mx-3">
                        <a href="/" title="Paypal">
                          <img
                            src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-506.png"
                            alt="Paypal"
                          />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="/" title="Visa">
                          <img
                            src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-507.png"
                            alt="Visa"
                          />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="/" title="Master">
                          <img
                            src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-508.png"
                            alt="Master"
                          />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="/" title="Discover">
                          <img
                            src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-509.png"
                            alt="Discover"
                          />
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__Bottom py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Support</h3>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>AirCover</li>
                <li>Anti-discrimination</li>
                <li>Disability Support</li>
                <li>Cancellation Options</li>
                <li>Report Neighborhood Concern</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Hosting</h3>
              <ul className="list-unstyled">
                <li>Airbnb Your Home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting Resources</li>
                <li>Community Forum</li>
                <li>Hosting Responsibly</li>
                <li>Airbnb-Friendly Apartments</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Airbnb</h3>
              <ul className="list-unstyled">
                <li>Newsroom</li>
                <li>New Features</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Gift Cards</li>
                <li>Airbnb.org Emergency Stays</li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p className="text-center">
                © 2024 Royal, Inc. · <a href="#">Terms</a> ·
                <a href="#">Sitemap</a> ·<a href="#">Privacy</a> · Your Privacy
                Choices
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
