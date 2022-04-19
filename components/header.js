export default function Header() {
  return(
    <>
    <div className="header">
          <div className="header-left">
            <a href="admin-dashboard.html" className="logo">
              <img src="assets/img/logo.png" width={40} height={40} alt="" />
            </a>
          </div>
          <a id="toggle_btn" href="#">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <div className="page-title-box">
            <h3>جامعة تكنولوجيا المعلومات والاتصالات</h3>
          </div>
          <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <i className="fa fa-bars" />
          </a>
          <ul className="nav user-menu">
            <li className="nav-item">
              <div className="top-nav-search">
                <a href="#" className="responsive-search">
                  <i className="fa fa-search" />
                </a>
                <form action="search">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ابحث هنا"
                  />
                  <button className="btn" type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow flag-nav">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <img src="assets/img/flags/iq.png" alt="" height={20} />{" "}
                <span>عربي</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  <img src="assets/img/flags/iq.png" alt="" height={16} />{" "}
                  عربي
                </a>
                <a href="#" className="dropdown-item">
                  <img src="assets/img/flags/us.png" alt="" height={16} />{" "}
                  English
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-bell-o" />{" "}
                <span className="badge rounded-pill">3</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">الاشعارات</span>
                  <a href="#" className="clear-noti">
                    {" "}
                    مسح الكل{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added
                              new task{" "}
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-03.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Tarah Shropshire
                              </span>{" "}
                              changed the task name{" "}
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-06.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>{" "}
                              added{" "}
                              <span className="noti-title">
                                Domenic Houston
                              </span>{" "}
                              and{" "}
                              <span className="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-17.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>{" "}
                              completed task{" "}
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Bernardo Galaviz
                              </span>{" "}
                              added new task{" "}
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                2 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities">عرض كل الاشعارات</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-comment-o" />{" "}
                <span className="badge rounded-pill">8</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">الرسائل</span>
                  <a href="#" className="clear-noti">
                    {" "}
                    مسح الكل{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-09.jpg"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              Richard Miles{" "}
                            </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">John Doe</span>
                            <span className="message-time">6 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-03.jpg"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              {" "}
                              Tarah Shropshire{" "}
                            </span>
                            <span className="message-time">5 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-05.jpg"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Mike Litorus</span>
                            <span className="message-time">3 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-08.jpg"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              {" "}
                              Catherine Manseau{" "}
                            </span>
                            <span className="message-time">27 Feb</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="chat">عرض كل الرسائل</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="user-img">
                  <img src="assets/img/profiles/avatarhmr.jpg" alt="" />
                  <span className="status online" />
                </span>
                <span>الادمن</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="profile">
                  البروفايل
                </a>
                <a className="dropdown-item" href="settings">
                  الاعدادات
                </a>
                <a className="dropdown-item" href="index">
                  تسجيل الخروج
                </a>
              </div>
            </li>
          </ul>
          <div className="dropdown mobile-user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="profile">
                البروفايل
              </a>
              <a className="dropdown-item" href="settings">
                الاعدادات
              </a>
              <a className="dropdown-item" href="index">
                تسجيل الخروج
              </a>
            </div>
          </div>
        </div>
    </>
  )
  }