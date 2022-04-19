import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function AdminDash() {
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
  <title>الحضور</title>
  <link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/line-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    <Header />
    <SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">الحضور</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">لوحة القيادة</a>
                </li>
                <li className="breadcrumb-item active">الحضور</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">اسم الموظف</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>الشهر</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <label className="focus-label">اختر الشهر</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>-</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
              <label className="focus-label">اختر السنة</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="d-grid">
              <a href="#" className="btn btn-success">
                {" "}
                بحث{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>الموظف</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatarhmr.jpg" />
                        </a>
                        <a href="profile">حسين محمد رضا</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <div className="half-day">
                        <span className="first-off">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#attendance_info"
                          >
                            <i className="fa fa-check text-success" />
                          </a>
                        </span>
                        <span className="first-off">
                          <i className="fa fa-close text-danger" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <div className="half-day">
                        <span className="first-off">
                          <i className="fa fa-close text-danger" />
                        </span>
                        <span className="first-off">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#attendance_info"
                          >
                            <i className="fa fa-check text-success" />
                          </a>
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a href="profile">Richard Miles</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                        </a>
                        <a href="profile">John Smith</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <a href="profile">Mike Litorus</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="profile">Wilmer Deluna</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-12.jpg" />
                        </a>
                        <a href="profile">Jeffrey Warden</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                        </a>
                        <a href="profile">Bernardo Galaviz</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-01.jpg" />
                        </a>
                        <a href="profile">Lesley Grauer</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                        </a>
                        <a href="profile">Jeffery Lalor</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-xs" href="profile">
                          <img alt="" src="assets/img/profiles/avatar-04.jpg" />
                        </a>
                        <a href="profile">Loren Gatlin</a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <i className="fa fa-close text-danger" />{" "}
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                      >
                        <i className="fa fa-check text-success" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal fade"
        id="attendance_info"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">معلومات الحضور</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card punch-status">
                    <div className="card-body">
                      <h5 className="card-title">
                        جدول التوقيتات{" "}
                        <small className="text-muted">11 Mar 2019</small>
                      </h5>
                      <div className="punch-det">
                        <h6>Punch In at</h6>
                        <p>Wed, 11th Mar 2019 10.00 AM</p>
                      </div>
                      <div className="punch-info">
                        <div className="punch-hours">
                          <span>3.45 hrs</span>
                        </div>
                      </div>
                      <div className="punch-det">
                        <h6>Punch Out at</h6>
                        <p>Wed, 20th Feb 2019 9.00 PM</p>
                      </div>
                      <div className="statistics">
                        <div className="row">
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box">
                              <p>Break</p>
                              <h6>1.21 hrs</h6>
                            </div>
                          </div>
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box">
                              <p>وقت اضافي</p>
                              <h6>3 hrs</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card recent-activity">
                    <div className="card-body">
                      <h5 className="card-title">Activity</h5>
                      <ul className="res-activity-list">
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            10.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.15 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            1.30 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            2.00 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            7.30 PM.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/select2.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/bootstrap-datetimepicker.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
</>
);
}