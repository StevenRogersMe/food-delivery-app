import React from "react";

import Image from "next/image";
import Card_all from "@/public/img/cards_all.svg";
import Youtubu_icon from "@/public/img/youtube_icon.svg";
import Instagram_icon from "@/public/img/instagram_icon.svg";
import Facebook_icon from "@/public/img/facebook_icon.svg";
import Twitter_icon from "@/public/img/twitter_icon.svg";

// style
import "@/styles/layout/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wave footer"></div>
      <div className="container margin_60_40 fix_mobile">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_1">Quick Links</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="submit-restaurant.html">Add your restaurant</a>
                </li>
                <li>
                  <a href="help.html">Help</a>
                </li>
                <li>
                  <a href="register.html">My account</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_2">Categories</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_2">
              <ul>
                <li>
                  <a href="grid-listing-filterscol.html">Top Categories</a>
                </li>
                <li>
                  <a href="grid-listing-filterscol-full-masonry.html">
                    Best Rated
                  </a>
                </li>
                <li>
                  <a href="grid-listing-filterscol-full-width.html">
                    Best Price
                  </a>
                </li>
                <li>
                  <a href="grid-listing-filterscol-full-masonry.html">
                    Latest Submissions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_3">Contacts</h3>
            <div className="collapse dont-collapse-sm contacts" id="collapse_3">
              <ul>
                <li>
                  <i className="icon_house_alt"></i>97845 Baker st. 567
                  <br />
                  Los Angeles - US
                </li>
                <li>
                  <i className="icon_mobile"></i>+94 423-23-221
                </li>
                <li>
                  <i className="icon_mail_alt"></i>
                  <a href="#0">info@domain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_4">Keep in touch</h3>
            <div className="collapse dont-collapse-sm" id="collapse_4">
              <div id="newsletter">
                <div id="message-newsletter"></div>
                <form name="newsletter_form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <button type="submit">
                      <i className="arrow_carrot-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="follow_us">
                <h5>Follow Us</h5>
                <ul>
                  <li>
                    <a href="#0">
                      <Image
                        src={Twitter_icon}
                        className="lazy"
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <Image
                        src={Facebook_icon}
                        className="lazy"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <Image
                        src={Instagram_icon}
                        className="lazy"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <Image
                        src={Youtubu_icon}
                        className="lazy"
                        alt="youtubu_icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /row--> */}
        <hr />
        <div className="row add_bottom_25">
          <div className="col-lg-6">
            <ul className="footer-selector clearfix">
              <li>
                <div className="styled-select lang-selector">
                  <select defaultValue="English">
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="styled-select currency-selector">
                  <select defaultValue="dollars">
                    <option value="dollars">US Dollars</option>
                    <option value="euro">Euro</option>
                  </select>
                </div>
              </li>
              <li>
                <Image
                  src={Card_all}
                  width={230}
                  height={35}
                  className="lazy"
                  alt="cards"
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li>
                <a href="#0">Terms and conditions</a>
              </li>
              <li>
                <a href="#0">Privacy</a>
              </li>
              <li>
                <span>© FooYes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
