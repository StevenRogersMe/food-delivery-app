"use client";
import { useState, useEffect } from "react";
import classnames from "classnames";

// style
import "@/styles/layout/header.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isShowDropMenu, setIsShowDropMenu] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classnames("header clearfix element_to_stick", {
        sticky: isSticky,
      })}
    >
      <div className="container">
        <div id="logo">
          <a href="index.html">
            <img
              src="/img/logo.svg"
              width="162"
              height="35"
              alt=""
              className="logo_normal"
            />
            <img
              src="/img/logo_sticky.svg"
              width="162"
              height="35"
              alt=""
              className="logo_sticky"
            />
          </a>
        </div>
        {/* <!-- Opacity Mask Menu Mobile --> */}
        <div
          className={classnames("layer", { "layer-is-visible": isMobile })}
        ></div>
        <ul id="top_menu">
          <li>
            <a href="#sign-in-dialog" id="sign-in" className="login">
              Sign In
            </a>
          </li>
          <li>
            <a href="#0" className="wishlist_bt_top" title="Your wishlist">
              Your wishlist
            </a>
          </li>
        </ul>
        {/* <!-- /top_menu --> */}
        <a
          href="#0"
          className="open_close"
          onClick={() => {
            setIsMobile(true);
          }}
        >
          <i className="icon_menu"></i>
          <span>Menu</span>
        </a>
        <nav className={classnames("main-menu", { show: isMobile })}>
          <div id="header_menu">
            <a
              href="#0"
              className="open_close"
              onClick={() => {
                setIsMobile(false);
              }}
            >
              <i className="icon_close"></i>
              <span>Menu</span>
            </a>
            <a href="index.html">
              <img src="img/logo.svg" width="162" height="35" alt="" />
            </a>
          </div>
          <ul>
            <li className="submenu">
              <a
                href="#0"
                className="show-submenu"
                onClick={() => {
                  isShowDropMenu[0] = !isShowDropMenu[0];
                  setIsShowDropMenu([...isShowDropMenu]);
                }}
              >
                Home
              </a>
              <ul className={classnames({ show_normal: isShowDropMenu[0] })}>
                <li>
                  <a href="index-13.html">
                    KenBurns Slider <strong>New!</strong>
                  </a>
                </li>
                <li>
                  <a href="index.html">Address Autocomplete</a>
                </li>
                <li>
                  <a href="index-2.html">Search by Keyword</a>
                </li>
                <li>
                  <a href="index-3.html">Home Version 2</a>
                </li>
                <li>
                  <a href="index-4.html">Video Bg Fallback Mobile</a>
                </li>
                <li className="third-level">
                  <a href="#0">
                    Sliders - Parallax <strong>New!</strong>
                  </a>
                  <ul>
                    <li>
                      <a href="index-6.html">Owl Carousel</a>
                    </li>
                    <li>
                      <a href="index-7.html">Revolution Slider 1</a>
                    </li>
                    <li>
                      <a href="index-8.html">Revolution Slider 2</a>
                    </li>
                    <li>
                      <a href="index-9.html">Youtube/Vimeo Parallax</a>
                    </li>
                    <li>
                      <a href="index-10.html">MP4 Video Parallax</a>
                    </li>
                    <li>
                      <a href="index-11.html">Parallax Image</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="index-12.html">
                    Text Rotator <strong>New!</strong>
                  </a>
                </li>
                <li>
                  <a href="index-5.html">GDPR Cookie Bar EU Law</a>
                </li>
                <li>
                  <a href="header-user-logged.html">Header User Logged</a>
                </li>
                <li>
                  <a href="header-cart-top.html">Header Cart Top</a>
                </li>
                <li>
                  <a href="modal-advertise.html">Modal 1 Cookie Session</a>
                </li>
                <li>
                  <a href="modal-newsletter.html">Modal 2 Cookie Session</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a
                href="#0"
                className="show-submenu"
                onClick={() => {
                  isShowDropMenu[1] = !isShowDropMenu[1];
                  setIsShowDropMenu([...isShowDropMenu]);
                }}
              >
                Listing
              </a>
              <ul className={classnames({ show_normal: isShowDropMenu[1] })}>
                <li className="third-level">
                  <a href="#0">List pages</a>
                  <ul>
                    <li>
                      <a href="grid-listing-filterscol.html">List default</a>
                    </li>
                    <li>
                      <a href="grid-listing-filterscol-map.html">
                        List with map
                      </a>
                    </li>
                    <li>
                      <a href="listing-map.html">List side map</a>
                    </li>
                    <li>
                      <a href="grid-listing-masonry.html">
                        List Masonry Filter
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="third-level">
                  <a href="#0">Detail pages</a>
                  <ul>
                    <li>
                      <a href="detail-restaurant.html">Detail page 1</a>
                    </li>
                    <li>
                      <a href="detail-restaurant-2.html">Detail page 2</a>
                    </li>
                    <li>
                      <a href="detail-restaurant-3.html">Detail page 3</a>
                    </li>
                    <li>
                      <a href="detail-restaurant-4.html">Detail page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="third-level">
                  <a href="#0">OpenStreetMap</a>
                  <ul>
                    <li>
                      <a href="grid-listing-filterscol-openstreetmap.html">
                        List with map
                      </a>
                    </li>
                    <li>
                      <a href="listing-map-openstreetmap.html">List side map</a>
                    </li>
                    <li>
                      <a href="grid-listing-masonry-openstreetmap.html">
                        List Masonry Filter
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="submit-restaurant.html">Submit Restaurant</a>
                </li>
                <li>
                  <a href="submit-rider.html">Submit Rider</a>
                </li>
                <li>
                  <a href="order.html">Order</a>
                </li>
                <li>
                  <a href="confirm.html">Confirm Order</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a
                href="#0"
                className="show-submenu"
                onClick={() => {
                  isShowDropMenu[2] = !isShowDropMenu[2];
                  setIsShowDropMenu([...isShowDropMenu]);
                }}
              >
                Other Pages
              </a>
              <ul className={classnames({ show_normal: isShowDropMenu[2] })}>
                <li>
                  <a href="admin_section/index.html" target="_blank">
                    Admin Section
                  </a>
                </li>
                <li>
                  <a href="404.html">404 Error</a>
                </li>
                <li>
                  <a href="help.html">Help and Faq</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="leave-review.html">Leave a review</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="coming_soon/index.html">Coming Soon</a>
                </li>
                <li>
                  <a href="login.html">Sign In</a>
                </li>
                <li>
                  <a href="register.html">Sign Up</a>
                </li>
                <li>
                  <a href="icon-pack-1.html">Icon Pack 1</a>
                </li>
                <li>
                  <a href="icon-pack-2.html">Icon Pack 2</a>
                </li>
                <li>
                  <a href="shortcodes.html">Shortcodes</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
