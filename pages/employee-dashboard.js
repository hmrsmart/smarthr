import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function EmployeeDashboard() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=0"
  />
  <meta name="description" content="Smarthr - Bootstrap Admin Template" />
  <meta
    name="keywords"
    content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
  />
  <meta name="author" content="Dreamguys - Bootstrap Admin Template" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Employee Dashboard - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.rtl.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    <div id="loader-wrapper">
      <div id="loader">
        <div className="loader-ellips">
          <span className="loader-ellips__dot" />
          <span className="loader-ellips__dot" />
          <span className="loader-ellips__dot" />
          <span className="loader-ellips__dot" />
        </div>
      </div>
    </div>
    <Header />
	<SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="welcome-box">
              <div className="welcome-img">
                <img alt="" src="assets/img/profiles/avatarhmr.jpg" />
              </div>
              <div className="welcome-det">
                <h3>Welcome, John Doe</h3>
                <p>Monday, 20 May 2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <section className="dash-section">
              <h1 className="dash-sec-title">Today</h1>
              <div className="dash-sec-content">
                <div className="dash-info-list">
                  <a href="#" className="dash-card text-danger">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-hourglass-o" />
                      </div>
                      <div className="dash-card-content">
                        <p>Richard Miles is off sick today</p>
                      </div>
                      <div className="dash-card-avatars">
                        <div className="e-avatar">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dash-info-list">
                  <a href="#" className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-suitcase" />
                      </div>
                      <div className="dash-card-content">
                        <p>You are away today</p>
                      </div>
                      <div className="dash-card-avatars">
                        <div className="e-avatar">
                          <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dash-info-list">
                  <a href="#" className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-building-o" />
                      </div>
                      <div className="dash-card-content">
                        <p>You are working from home today</p>
                      </div>
                      <div className="dash-card-avatars">
                        <div className="e-avatar">
                          <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className="dash-section">
              <h1 className="dash-sec-title">Tomorrow</h1>
              <div className="dash-sec-content">
                <div className="dash-info-list">
                  <div className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-suitcase" />
                      </div>
                      <div className="dash-card-content">
                        <p>2 people will be away tomorrow</p>
                      </div>
                      <div className="dash-card-avatars">
                        <a href="#" className="e-avatar">
                          <img src="assets/img/profiles/avatar-04.jpg" alt="" />
                        </a>
                        <a href="#" className="e-avatar">
                          <img src="assets/img/profiles/avatar-08.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="dash-section">
              <h1 className="dash-sec-title">Next seven days</h1>
              <div className="dash-sec-content">
                <div className="dash-info-list">
                  <div className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-suitcase" />
                      </div>
                      <div className="dash-card-content">
                        <p>2 people are going to be away</p>
                      </div>
                      <div className="dash-card-avatars">
                        <a href="#" className="e-avatar">
                          <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                        </a>
                        <a href="#" className="e-avatar">
                          <img src="assets/img/profiles/avatar-07.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dash-info-list">
                  <div className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-user-plus" />
                      </div>
                      <div className="dash-card-content">
                        <p>Your first day is going to be on Thursday</p>
                      </div>
                      <div className="dash-card-avatars">
                        <div className="e-avatar">
                          <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dash-info-list">
                  <a href="" className="dash-card">
                    <div className="dash-card-container">
                      <div className="dash-card-icon">
                        <i className="fa fa-calendar" />
                      </div>
                      <div className="dash-card-content">
                        <p>It's Spring Bank Holiday on Monday</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dash-sidebar">
              <section>
                <h5 className="dash-title">Projects</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="time-list">
                      <div className="dash-stats-list">
                        <h4>71</h4>
                        <p>Total Tasks</p>
                      </div>
                      <div className="dash-stats-list">
                        <h4>14</h4>
                        <p>Pending Tasks</p>
                      </div>
                    </div>
                    <div className="request-btn">
                      <div className="dash-stats-list">
                        <h4>2</h4>
                        <p>Total Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h5 className="dash-title">Your Leave</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="time-list">
                      <div className="dash-stats-list">
                        <h4>4.5</h4>
                        <p>Leave Taken</p>
                      </div>
                      <div className="dash-stats-list">
                        <h4>12</h4>
                        <p>Remaining</p>
                      </div>
                    </div>
                    <div className="request-btn">
                      <a className="btn btn-primary" href="#">
                        Apply Leave
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h5 className="dash-title">Your time off allowance</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="time-list">
                      <div className="dash-stats-list">
                        <h4>5.0 Hours</h4>
                        <p>Approved</p>
                      </div>
                      <div className="dash-stats-list">
                        <h4>15 Hours</h4>
                        <p>Remaining</p>
                      </div>
                    </div>
                    <div className="request-btn">
                      <a className="btn btn-primary" href="#">
                        Apply Time Off
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h5 className="dash-title">Upcoming Holiday</h5>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className="holiday-title mb-0">
                      Mon 20 May 2019 - Ramzan
                    </h4>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
</>
    )
    }
