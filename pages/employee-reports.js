import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function EmployeeReport() {
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
  <title>Employee Report - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.rtl.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="assets/css/select2.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Employee Report</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Employee Report</li>
              </ul>
            </div>
            <div className="col-auto">
              <a href="#" className="btn btn-primary">
                PDF
              </a>
            </div>
          </div>
        </div>
        <div className="row filter-row mb-4">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input className="form-control floating" type="text" />
              <label className="focus-label">Employee</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>Select Department</option>
                <option>Designing</option>
                <option>Development</option>
                <option>Finance</option>
                <option>Hr &amp; Finance</option>
              </select>
              <label className="focus-label">Department</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="d-grid">
              <a href="#" className="btn btn-success">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee Type</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Joining Date</th>
                    <th>DOB</th>
                    <th>Martial Status</th>
                    <th>Gender</th>
                    <th>Terminated Date</th>
                    <th>Relieving Date</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Emercency Contact Details</th>
                    <th>Experience</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </a>
                        <a href="profile" className="text-primary">
                          John Doe <span>#0001</span>
                        </a>
                      </h2>
                    </td>
                    <td>Employee</td>
                    <td className="text-info">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e68c898e88828983a6839e878b968a83c885898b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Design</td>
                    <td>UI Design</td>
                    <td>20 Aug 2020</td>
                    <td>03 Mar 1992</td>
                    <td>Married</td>
                    <td>Male</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$20000</td>
                    <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                    <td>9876543210</td>
                    <td>7894561235</td>
                    <td>0 years 4 months and 9 days</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Active
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a href="profile" className="text-primary">
                          Richard Miles <span>#0002</span>
                        </a>
                      </h2>
                    </td>
                    <td>Employee</td>
                    <td className="text-info">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="ddafb4beb5bcafb9b0b4b1b8ae9db8a5bcb0adb1b8f3beb2b0"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Android Developer</td>
                    <td>IT Support</td>
                    <td>01 Jul 2020</td>
                    <td>05 Dec 1979</td>
                    <td>Married</td>
                    <td>Male</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$15000</td>
                    <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                    <td>9876543210</td>
                    <td>7894561235</td>
                    <td>0 years 5 months and 24 days</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Active
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                        </a>
                        <a href="profile" className="text-primary">
                          John Smith <span>#003</span>
                        </a>
                      </h2>
                    </td>
                    <td>Employee</td>
                    <td className="text-info">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="b2d8dddadcc1dfdbc6daf2d7cad3dfc2ded79cd1dddf"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>IOS Developer</td>
                    <td>Development Manager</td>
                    <td>03 Sep 2020</td>
                    <td>16 Apr 1984</td>
                    <td>Married</td>
                    <td>Male</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$27000</td>
                    <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                    <td>9876543210</td>
                    <td>7894561235</td>
                    <td>0 years 3 months and 21 days</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Active
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <a href="profile" className="text-primary">
                          Mike Litorus <span>#004</span>
                        </a>
                      </h2>
                    </td>
                    <td>Employee</td>
                    <td className="text-info">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="8ae7e3e1efe6e3fee5f8fff9caeff2ebe7fae6efa4e9e5e7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Web Developer</td>
                    <td>IT Support</td>
                    <td>15 Nov 2020</td>
                    <td>15 Jul 2005</td>
                    <td>Single</td>
                    <td>Male</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$15000</td>
                    <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                    <td>9876543210</td>
                    <td>7894561235</td>
                    <td>0 years 1 months and 9 days</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Active
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="profile" className="text-primary">
                          Wilmer Deluna <span>#005</span>
                        </a>
                      </h2>
                    </td>
                    <td>Employee</td>
                    <td className="text-info">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="8dfae4e1e0e8ffe9e8e1f8e3eccde8f5ece0fde1e8a3eee2e0"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Team Leader</td>
                    <td>Development Manager</td>
                    <td>01 Dec 2020</td>
                    <td>21 Jun 1984</td>
                    <td>Married</td>
                    <td>Male</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$25000</td>
                    <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                    <td>9876543210</td>
                    <td>7894561235</td>
                    <td>0 years 0 months and 24 days</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Active
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/select2.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/dataTables.bootstrap4.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/bootstrap-datetimepicker.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
</>

    )
    }