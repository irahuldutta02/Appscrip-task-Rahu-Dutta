import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="newsletter-section">
        <div className="newsletter-content">
          {/* newsletter form */}
          <form className="newsletter-form">
            <h2 className="newsletter-title">Be the first to know</h2>
            <p className="newsletter-description">
              Sign up for updates from mettā muse.
            </p>
            <div className="newsletter-input-group">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Enter your e-mail
              </label>
              <input
                type="email"
                id="newsletter-email"
                className="newsletter-input"
                placeholder="Enter your e-mail..."
                required
              />
              <button type="submit" className="newsletter-submit">
                Subscribe
              </button>
            </div>
          </form>

          {/* contact us */}
          <div className="contact-info">
            <h2 className="contact-title">CONTACT US</h2>
            <p className="contact-details">+44 221 133 5360</p>
            <p className="contact-details">customercare@mettamuse.com</p>
            <div className="currency-selector">
              <h3 className="contact-title">Currency</h3>
              <div className="language-selector lg-currency-selector">
                <Image
                  src="/assets/svg/us.svg"
                  alt="Currency flag"
                  className="header-icon"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/svg/star-1.svg"
                  alt="Currency dropdown"
                  className="header-icon"
                  width={5}
                  height={5}
                />
                <span>USD</span>
              </div>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* sm call us */}
        <div className="sm-call-us">
          <div className="sm-call-us-wrapper">
            <h2 className="sm-call-us-up">CALL US</h2>
            <div className="sm-call-us-down">
              <div className="sm-call-us-text">
                <span>+44 221 133 5360</span>
                <Image
                  src="/assets/svg/star-1.svg"
                  alt="Currency dropdown"
                  width={5}
                  height={5}
                />
                <span>customercare@mettamuse.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm currency */}
        <div className="sm-call-us">
          <div className="sm-call-us-wrapper">
            <h2 className="sm-call-us-up">CURRENCY</h2>
            <div className="sm-call-us-down">
              <div className="language-selector">
                <Image
                  src="/assets/svg/us.svg"
                  alt="Currency flag"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/svg/star-1.svg"
                  alt="Currency dropdown"
                  width={5}
                  height={5}
                />
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm-brand */}
        <div className="sm-brand">
          <h2 className="sm-call-us-up">mettā muse</h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt=""
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm-quick-links */}
        <div className="sm-brand">
          <h2 className="sm-call-us-up">QUICK LINKS</h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt=""
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm-quick-links */}
        <div className="sm-brand">
          <h2 className="sm-call-us-up">FOLLOW US</h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt=""
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        <footer className="footer-links">
          <div className="footer-main">
            <div className="footer-main-wrapper">
              {/* footer brand */}
              <div className="footer-brand">
                <h2 className="footer-brand-name">mettā muse</h2>
                <nav className="footer-nav">
                  <a href="#" className="footer-nav-item">
                    About Us
                  </a>
                  <a href="#" className="footer-nav-item">
                    Stories
                  </a>
                  <a href="#" className="footer-nav-item">
                    Artisans
                  </a>
                  <a href="#" className="footer-nav-item">
                    Boutiques
                  </a>
                  <a href="#" className="footer-nav-item">
                    Contact Us
                  </a>
                  <a href="#" className="footer-nav-item">
                    EU Compliances Docs
                  </a>
                </nav>
              </div>

              {/* footer links */}
              <div className="footer-links-column">
                <h3 className="footer-links-title">Quick Links</h3>
                <nav className="footer-links-list">
                  <a href="#" className="footer-links-item">
                    Orders & Shipping
                  </a>
                  <a href="#" className="footer-links-item">
                    Join/Login as a Seller
                  </a>
                  <a href="#" className="footer-links-item">
                    Payment & Pricing
                  </a>
                  <a href="#" className="footer-links-item">
                    Return & Refunds
                  </a>
                  <a href="#" className="footer-links-item">
                    FAQs
                  </a>
                  <a href="#" className="footer-links-item">
                    Privacy Policy
                  </a>
                  <a href="#" className="footer-links-item">
                    Terms & Conditions
                  </a>
                </nav>
              </div>

              {/* footer social */}
              <div className="footer-social">
                <h3 className="footer-links-title">Follow Us</h3>
                <div className="social-links">
                  <Link href="#" aria-label="Instagram">
                    <Image
                      src="/assets/svg/insta.svg"
                      alt=""
                      className="Instagram-icon"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="#" aria-label="linkedin">
                    <Image
                      src="/assets/svg/linkedin.svg"
                      alt=""
                      className="linkedin-icon"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

                <div className="payment-methods">
                  <h3 className="payment-methods-title">mettā muse ACCEPTS</h3>
                  <div className="payment-icons">
                    <Image
                      src="/assets/svg/gpay.svg"
                      alt="Visa"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/mastercard.svg"
                      alt="Mastercard"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/paypal.svg"
                      alt="American Express"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/amx.svg"
                      alt="Discover"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/applePay.svg"
                      alt="PayPal"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/pay.svg"
                      alt="Apple Pay"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* footer copyright */}
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright">
                Copyright © 2023 mettamuse. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
