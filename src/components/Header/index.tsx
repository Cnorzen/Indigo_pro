import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./index.css";

const Header = () => {
  const user = "loginned"; /* registered, unregistered */
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="row d-flex align-items-center mt-4">
          <div className="col-lg-6 col-md-12 px-3 title row d-flex align-items-center">
            <h6 className="col-lg-12 col-md-12 title-title">
              Chào mừng bạn tới Indigo
            </h6>
          </div>
          <div className="col-lg-6 col-md-12 contacts">
            <div className="row">
              <div className="col-lg-6 col-md-12 d-flex header-top-email-phone">
                <img src="/image/header_top_phone.svg" alt="phone" />
                <h6 className="px-3 mb-0">0912345678</h6>
              </div>
              <div className="col-lg-6 col-md-12 d-flex header-top-email-phone">
                <img src="/image/header_top_email.svg" alt="email" />
                <h6 className="mb-0" style={{ marginLeft: "15px" }}>
                  support@Indigo.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
        className="mt-4"
      />
      <div className="container mt-4 pb-4">
        <div className="row d-flex refs-col">
          <div className="col-lg-3 col-6">
            <Link to="/">
              <img className="logo-icon" src="/image/logo_sy.png" alt="logo" />
            </Link>
          </div>
          <div className="col-lg-6 header-refs">
            <div className="row text-center d-flex justify-content-center align-items-center">
              <h5 className="col">
                <Link to="/" className="header-bottom__ref">
                  Trang Chủ
                </Link>
              </h5>
              <h5 className="col">
                <Link to="/about" className="header-bottom__ref">
                  Về Chúng Tôi
                </Link>
              </h5>
              <h5 className="col">
                <Link to="/projects" className="header-bottom__ref">
                  Sản Phẩm
                </Link>
              </h5>
              <h5 className="col">
                <Link to="/news" className="header-bottom__ref">
                  Tin Tức
                </Link>
              </h5>
              <h5 className="col">
                <Link to="/contact" className="header-bottom__ref">
                  Liên Hệ
                </Link>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-5 mt-2">
            <div className="header-bottom__button">
              <Link to={"/login"}>
                <button className="button-bg-white-text-pink">
                  <span className="mx-3">Login</span>
                </button>
              </Link>
            </div>
            <div className="burger-menu-col">
              <div>
                <AiOutlineMenu
                  className="burger-menu mt-3"
                  onClick={() => setBurgerMenu(!burgerMenu)}
                />
                {burgerMenu ? (
                  <div className="burger-content">
                    <div className="text-center p-3">
                      <h5 className="mt-3">
                        <Link to="/" className="header-bottom__ref">
                          Trang Chủ
                        </Link>
                      </h5>
                      <hr
                        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
                      />
                      <h5>
                        <Link to="/about" className="header-bottom__ref">
                          Về Chúng Tôi
                        </Link>
                      </h5>
                      <hr
                        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
                      />
                      <h5>
                        <Link to="/projects" className="header-bottom__ref">
                          Sản Phẩm
                        </Link>
                      </h5>
                      <hr
                        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
                      />
                      <h5>
                        <Link to="/news" className="header-bottom__ref">
                          Tin Tức
                        </Link>
                      </h5>
                      <hr
                        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
                      />
                      <h5>
                        <Link to="/contact" className="header-bottom__ref">
                          Liên Hệ
                        </Link>
                      </h5>
                      <hr
                        style={{ width: "100%", color: "rgba(0, 0, 0, 0.5)" }}
                      />
                      <div className=" mt-3">
                        <h6>0912345678</h6>
                      </div>
                      <div className="mt-1">
                        <h6>support@SynerLink.com</h6>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
