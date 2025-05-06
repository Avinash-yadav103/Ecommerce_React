import { Send } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className={styles.emailInput}>
            <input type="email" placeholder="Enter your email" />
            <button type="button">
              <Send size={20} />
            </button>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Support</h3>
          <p className={styles.address}>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Account</h3>
          <nav className={styles.footerNav}>
            <a href="#">My Account</a>
            <a href="#">Login / Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Link</h3>
          <nav className={styles.footerNav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3>Download App</h3>
          <p className={styles.saveText}>Save $3 with App New User Only</p>
          <div className={styles.downloadSection}>
            <div className={styles.qrCode}>
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="QR Code"
                width="100"
                height="100"
                className={styles.qr}
              />
            </div>
            <div className={styles.appButtons}>
              <a href="#" className={styles.storeButton}>
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Get it on Google Play"
                  width="120"
                  height="40"
                />
              </a>
              <a href="#" className={styles.storeButton}>
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on the App Store"
                  width="120"
                  height="40"
                />
              </a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;