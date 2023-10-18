import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './NavBar.css'; // Create NavBar.css file for styling
import sub1 from './sub1.png';
import sub2 from './sub2.png';
import sub3 from './sub3.png';
import sub4 from './sub4.png';

import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import loom from './loom.png';
import live from './livechat.png'
import logo from './logo.png'
import logos from './logos.png'


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} className='icons'/>
        {/* <div className="name">WebGuard</div> */}
      </div>
      <div className="middle">
        <div className="item">Price <i className="fas fa-angle-down"></i></div>
        <div className="item">Resources</div>
        <div className="item">Supports</div>
        <div className="item">Partners</div>
      </div>
      <div className="right">
        <div className="login">Login</div>
        <button className="signup">Signup</button>
      </div>
    </div>
  );
};
const MainSection = () => {
  return (
    <div className="main-section">
      <h2>Say goodbye to the stress of forgotten <br/>passwords and the fear of data breach</h2>
      <div className="data">
        <p>Say goodbye to the stress of forgotten passwords and the fear of data breaches. Our password manager is designed to<br/> keep your digital life safe and secure, while simplifying the process of password management.</p>
      </div>
      <div className="button-container">
        <button className='btn1'>TryWebGurd Now</button>
        <button className='btns2'>Learn More</button>
      </div>
      {/* <div className="background-cover"></div> */}
    </div>
  );
};
const BackgroundSection = () => {
  return (
    <div className="background-section">

    </div>
  );
};
const AdditionalSection = () => {
  return (
    <div className="additional-section">
      <h3 className="sub-heading">Automate the management of all your passwords <br/>with our auto-pilot feature</h3>
      <div className="content">
        <p>Welcome to our password management platform, where you can put your password management on auto-pilot. With <br/> our auto-pilot feature, you can effortlessly manage all of your passwords in one place.</p>
      </div>
    </div>
  );
};

const FeatureComponent = ({ title, description, image }) => {
  return (
    <div className="feature-component">
      <h3 className="feature-title">{title}</h3>
      <div className="feature-description">{description}</div>
      <img src={image} alt="feature" className="feature-image" />
    </div>
  );
};
const Features = () => {
  return (
    <div className="features">
      <div className="features-row">
        <FeatureComponent
          title="Data Log in and go"
          description="Once you save a password in WebGuard, you'll always have it when you need it logging in is fast and easy"
          image={sub1}
        />
        <FeatureComponent
          title="Dark Web Monitoring"
          description="Stop worrying about data breaches. Get alerts if your personal information is at risk."
          image={sub2}
        />
      </div>
      <div className="features-row">
        <FeatureComponent
          title="Two-factor Authentication"
          description="Easily identify websites where you can turn on two-factor authentication and use WebGuard as an authenticator."
          image={sub3}
        />
        <FeatureComponent
          title="Passwordless Login"
          description="Gain instant access to your WebGuard vault by using the WebGuard Authenticator instead of your master password."
          image={sub4}
        />
      </div>
    </div>
  );
};

const AdditionalSection2 = () => {
  return (
    <div className="additional-section">
      <h3 className="sub-heading">Experience a sense of calm and security no matter<br/> where you are with WebGuard.
</h3>
      <div className="content">
        <p>Our platform uses advanced encryption and other security measures to protect your sensitive data from online threats,<br/> ensuring that you can enjoy browsing the internet without any worries. Whether you're at home, at work, or on-the-go.</p>
      </div>
    </div>
  );
};


const CombinedSection = () => {
  return (
    <div className="combined-section">
      <div className="image-cover-section">
        <img src={s1} alt="Cover" className="cover-image" />
      </div>
      <div className="two-images-section">
        <div className="image-container">
          <img src={s2} alt="Image 1" className="image" />
        </div>
        <div className="image-container">
          <img src={s3} alt="Image 2" className="image" />
        </div>
      </div>
    </div>
  );
};
const AdditionalSection3 = () => {
  return (
    <div className="additional-section">
      <h3 className="sub-heading2">Find the perfect subscription to meet your<br/> unique requirements.
      </h3>
      <div className="content2">
        <p>Looking for a subscription that fits your unique needs? Look no further. With our platform, you can <br/> find the perfect subscription plan that caters to your specific requirements.</p>
      </div>
    </div>
  );
};
const WebGuardComponent = () => {
  return (
    <div className="webguard-container">
      <div className="left-side">
        <div className="left-content">
          <h3>For Individuals</h3>
          <h2>Individual Starter Pack</h2>
          <p>Password management for one type of device that is easy to <br/>use, reliable, and secure.</p>
          <div className="price-section">
            <span className='price'>$12</span><span className='month'>/month</span>
          </div>
          <button>Get Started</button>
        </div>
      </div>
      <div className="right-side">
        <h3>What's Included</h3>
        <div className="right-content">
       
          <div className="included-items">
            <ul>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Unlimited Passwords</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> 1 User Account</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Access on 1 Device Type</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Save and Autofill Passwords</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> One-to-One Sharing</li>
              
              </ul>
          </div>
          <div className='left-list'>
            <ul>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Password Generator</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Security Dashboard</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Dark Web Monitoring</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Passwordless Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const WebGuardComponent2 = () => {
  return (
    <div className="webguard-container">
      <div className="left-side">
        <div className="left-content">
          <h3>For Enterprise</h3>
          <h2>Enterprise Starter Pack</h2>
          <p>Password management for one type of device that is easy to <br />use, reliable, and secure.</p>
          <div className="price-section">
            <span className='price'>$94</span><span className='month'>/month</span>
          </div>
          <button>Get Started</button>
        </div>
      </div>
      <div className="right-side">
        <h3>What's Included</h3>
        <div className="right-content">

          <div className="included-items">
            <ul>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Unlimited Passwords</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> 1 User Account</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Access on 1 Device Type</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Save and Autofill Passwords</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> One-to-One Sharing</li>

            </ul>
          </div>
          <div className='left-list'>
            <ul>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Password Generator</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Security Dashboard</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Dark Web Monitoring</li>
              <li><i class="fa fa-check-circle" aria-hidden="true"></i> Passwordless Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



const CustomComponent = () => {
  return (
    <div className="custom-container">
      <div className="left-side">
        <h2>Get to know about all product's pricing</h2>
        <p>Our platform offers a range of subscription plans that are tailored to <br /> your unique requirements, allowing you to find the perfect fit for you.</p>
      </div>
      <div className="right-side2">
        <button className="green-button">Button</button>
      </div>
    </div>
  );
};

const AdditionalSection4 = () => {
  return (
    <div className="additional-section">
      <h3 className="sub-heading">Be a part of the satisfied WebGuard users today and hear <br/>firsthand what our customers are saying about us!
      </h3>
      <div className="content">
        <p>Join the satisfied community of WebGuard users today and discover why our customers rave about our services! Hear <br/>firsthand what they have to say and experience the peace of mind that comes with top-notch online security.</p>
      </div>
    </div>
  );
};


const ReviewCardComponent = () => {
  return (
    <div className="review-card">
        <p>This password manager is hands down the best on the market. It's easy to use, affordable, and has saved me from the headache of managing my passwords on my own.</p>
        <p>Hassan Momayed</p>
        <p>UI/UX Designer at Kopo Creative</p>
      </div>
  );
};


const IconSectionComponent = () => {
  return (
    <div>
    <div className="icon-section">
      <i className="fab fa-spotify icon"></i>
      <i className="fab fa-microsoft icon"></i>
      <i className="fab fa-apple icon"></i>
      <i className="fab fa-salesforce icon"></i>
    </div>
    <div className="icon-row">
        <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/737373/external-hubspot-a-developer-and-marketer-of-software-products-logo-bold-tal-revivo.png" alt="external-hubspot-a-developer-and-marketer-of-software-products-logo-bold-tal-revivo" />
        <img width="100" height="100" src="https://img.icons8.com/ios/100/737373/netflix--v1.png" alt="netflix--v1" />
        <img  className='chatt' src={loom} />
        <img className='chatt' src={live} />
      </div>
      </div>
  );
};// FooterComponent.js'
const NewComponent = () => {
  return (
    <div className="new-component">
      <div className="text-section">
        <h3>Experience a sense of calm <br /> and security no matter where you <br /> are with WebGuard.</h3>
        <p>Our platform uses advanced encryption and other security measures to protect your sensitive data from online threats, ensuring that you can enjoy browsing the internet without any worries.</p>
        <div className="buttons">
          <button className="try-now-button"> Try WebGuard Now <i className="fas fa-network-wired"></i> </button>
          <button className="learn-more-button">Learn more <i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
      <div className="image-section">
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="column">
          <img className="icons" src={logos}/>
          <p>Discover the full scope of our services and see how we can help you.</p>
        </div>
        <div className="column">
          <h4>Products</h4>
          <ul>
            <li>Communication</li>
            <li>Remote Access</li>
            <li>View All Products</li>
          </ul>
        </div>
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Newsroom</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="column">
          <h4>Features</h4>
          <ul>
            <li>Autofill</li>
            <li>Password Vault</li>
            <li>Digital Wallet</li>
            <li>Password Manager</li>
            <li>Dark Monitoring</li>
            <li>Authenticator</li>
          </ul>
        </div>
        <div className="column">
          <h4>Resources</h4>
          <ul>
            <li>My Account</li>
            <li>Support</li>
            <li>Blog Partners</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom-footer">
        <p>© 2023 WebGrand. All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export { NavBar, MainSection, BackgroundSection, AdditionalSection, Features, AdditionalSection2, CombinedSection, AdditionalSection3, WebGuardComponent, WebGuardComponent2, CustomComponent ,AdditionalSection4 , ReviewCardComponent,IconSectionComponent, NewComponent, FooterComponent};