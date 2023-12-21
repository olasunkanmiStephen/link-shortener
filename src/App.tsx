import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: originalLink,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_BITLY_ACCESS_TOKEN',
          },
        }
      );

      setShortenedLink(response.data.id);
      setError('');
    } catch (error) {
      setShortenedLink('');
      setError('Error shortening the link. Please check your URL and try again.');
    }
  };

  return (
    <div>
      <header>
        <div className="wideNav">
          <div className="container">
            <ul className="left">
              <li><a href="#"><img src="/images/logo.svg" alt="shortly logo image" /></a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
            <ul className="right">
              <li><button>Login</button></li>
              <li><button className="signUp">Sign Up</button></li>
            </ul>
          </div>
        </div>
        <div className="mobileNav">
          <div className="container">
            <div className="logo"><a href="#"><img src="/images/logo.svg" alt="shortly logo image" /></a></div>
            <div className="berg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="menu hidden">
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
            <ul>
              <li><button>Login</button></li>
              <li><button className="signUp">Sign Up</button></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="landing">
          <div className="container">
              <div className="left">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="getStartedBtn">Get Started</button>
              </div>
              <div className="right">
                <img src="images/illustration-working.svg" alt="" aria-hidden="true" />
              </div>
          </div>
        </div>
          <div className="shortenSec">
              <form>
                <input
                  type="text"
                  name="SLI"
                  id="SLI"
                  className="LinkInput"
                  placeholder="Shorten a link here..."
                  value={originalLink}
                  onChange={(e) => setOriginalLink(e.target.value)}
                />
                <button type="button" onClick={handleShorten}>
                  Shorten It!
                </button>
                <div className="formErrorMessage hidden">{error}</div>
              </form>
              <div className="linkRes hidden">
                {shortenedLink && (
                  <div>
                    <p>Shortened Link:</p>
                    <a href={shortenedLink} target="_blank" rel="noopener noreferrer">
                      {shortenedLink}
                    </a>
                  </div>
                )}
              </div>
              <div className="text">
            <div className="container">
              <h2>Advanced Statistics</h2>
              <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
          </div>
          <div className="cardsSec">
            <div className="container">
              <div className="card">
                <div className="img">
                  <img src="images/icon-brand-recognition.svg" alt="" aria-hidden="true" />
                </div>
                <div className="ctext">
                  <h3>Brand Recognition</h3>
                  <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help
                    instil
                    confidence in your content.</p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="images/icon-detailed-records.svg" alt="" aria-hidden="true" />
                </div>
                <div className="ctext">
                  <h3>Detailed Records</h3>
                  <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content
                    helps
                    inform better decisions.</p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="images/icon-fully-customizable.svg" alt="" aria-hidden="true" />
                </div>
                <div className="ctext">
                  <h3>Fully Customizable</h3>
                  <p>Improve brand awareness and content discoverability through customizable links, supercharging audience
                    engagement.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="boostSec">
          <div className="container">
            <h2>Boost your links today</h2>
            <button className="getStartedBtn">Get Started</button>
          </div>
          </div>
      </main>
      <footer>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="images/logo.svg" alt="shortly logo image" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="name">Features</li>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
          <ul>
            <li className="name">Resources</li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
          <ul>
            <li className="name">Company</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="social">
            <li>
              <a href="#" aria-label="facebook page link"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
            </li>
            <li><a href="#" aria-label="twitter page link"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" aria-label="pinterest page link"><i className="fab fa-pinterest" aria-hidden="true"></i></a></li>
            <li><a href="#" aria-label="instagram page link"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Stephen-Olasunkanmi" target="_blank" rel="noopener noreferrer">Stephen Olasunkanmi</a>.
      </div>
      </footer>    
    </div>git 
  );
}

export default App;
