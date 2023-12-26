import React from "react";

// style
import "@/styles/dashboard/search-section.css";

const SearchSection = () => {
  return (
    <section>
      <div className="hero_single version_2">
        <div className="scroll-bg"></div>
        <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
          <div className="container">
            <div className="row justify-content-lg-start justify-content-md-center">
              <div className="col-xl-7 col-lg-8">
                <h1>Delivery or Takeaway Food</h1>
                <p>The best restaurants at the best price</p>
                <form method="post" action="grid-listing-filterscol.html">
                  <div className="row g-0 custom-search-input">
                    <div className="col-lg-10">
                      <div className="form-group">
                        <input
                          className="form-control no_border_r"
                          type="text"
                          placeholder="What are you looking for..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn_1 gradient" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                  {/* <!-- /row --> */}
                  <div className="search_trends">
                    <h5>Trending:</h5>
                    <ul>
                      <li>
                        <a href="#0">Sushi</a>
                      </li>
                      <li>
                        <a href="#0">Burgher</a>
                      </li>
                      <li>
                        <a href="#0">Chinese</a>
                      </li>
                      <li>
                        <a href="#0">Pizza</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
        </div>
        <div className="wave hero"></div>
      </div>
    </section>
  );
};

export default SearchSection;
