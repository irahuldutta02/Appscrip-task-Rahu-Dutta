import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section
        className="newsletter-section"
        role="region"
        aria-labelledby="newsletter-title"
      >
        <div className="newsletter-content">
          {/* newsletter form */}
          <form className="newsletter-form" aria-labelledby="newsletter-title">
            <h2 id="newsletter-title" className="newsletter-title">
              Be the first to know
            </h2>
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
              <button
                type="submit"
                className="newsletter-submit"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* contact us */}
          <div
            className="contact-info"
            role="region"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className="contact-title">
              CONTACT US
            </h2>
            <p className="contact-details">+44 221 133 5360</p>
            <p className="contact-details">customercare@mettamuse.com</p>
            <div className="currency-selector">
              <h3 className="contact-title">Currency</h3>
              <div className="language-selector lg-currency-selector">
                <Image
                  src="/assets/svg/us.svg"
                  alt="US flag"
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
        <div
          className="sm-call-us"
          role="region"
          aria-labelledby="sm-call-us-title"
        >
          <div className="sm-call-us-wrapper">
            <h2 id="sm-call-us-title" className="sm-call-us-up">
              CALL US
            </h2>
            <div className="sm-call-us-down">
              <div className="sm-call-us-text">
                <span>+44 221 133 5360</span>
                <Image
                  src="/assets/svg/star-1.svg"
                  alt="Star icon"
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
        <div
          className="sm-call-us"
          role="region"
          aria-labelledby="sm-currency-title"
        >
          <div className="sm-call-us-wrapper">
            <h2 id="sm-currency-title" className="sm-call-us-up">
              CURRENCY
            </h2>
            <div className="sm-call-us-down">
              <div className="language-selector">
                <Image
                  src="/assets/svg/us.svg"
                  alt="US flag"
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
        <div
          className="sm-brand"
          role="region"
          aria-labelledby="sm-brand-title"
        >
          <h2 id="sm-brand-title" className="sm-call-us-up">
            mettā muse
          </h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt="Arrow right icon"
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm-quick-links */}
        <div
          className="sm-brand"
          role="region"
          aria-labelledby="sm-quick-links-title"
        >
          <h2 id="sm-quick-links-title" className="sm-call-us-up">
            QUICK LINKS
          </h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt="Arrow right icon"
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        {/* sm-quick-links */}
        <div
          className="sm-brand"
          role="region"
          aria-labelledby="sm-follow-us-title"
        >
          <h2 id="sm-follow-us-title" className="sm-call-us-up">
            FOLLOW US
          </h2>
          <Image
            src="/assets/svg/arrow-right.svg"
            alt="Arrow right icon"
            className="Instagram-icon"
            width={30}
            height={30}
          />
        </div>
        <div className="footer-divider footer-divider-sm-call-us"></div>

        <footer className="footer-links" role="contentinfo">
          <div className="footer-main">
            <div className="footer-main-wrapper">
              {/* footer brand */}
              <div className="footer-brand">
                <h2 className="footer-brand-name">mettā muse</h2>
                <nav className="footer-nav" aria-label="Footer navigation">
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
                <nav className="footer-links-list" aria-label="Quick links">
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
                      alt="Instagram icon"
                      className="Instagram-icon"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <Image
                      src="/assets/svg/linkedin.svg"
                      alt="LinkedIn icon"
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
                      alt="Google Pay"
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
                      alt="PayPal"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/amx.svg"
                      alt="American Express"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/applePay.svg"
                      alt="Apple Pay"
                      className="payment-icon"
                      width={45}
                      height={45}
                    />
                    <Image
                      src="/assets/svg/pay.svg"
                      alt="Pay icon"
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
