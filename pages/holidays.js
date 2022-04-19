import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Holidays() {
  return(
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
  <title>العطل</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.rtl.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <div className="main-wrapper">
    <Header />
    <SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">عطل 2022</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">لوحة القيادة</a>
                </li>
                <li className="breadcrumb-item active">العطل</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_holiday"
              >
                <i className="fa fa-plus" /> اضافة عطلة
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>ت</th>
                    <th>العنوان </th>
                    <th>تاريخ العطلة</th>
                    <th>اليوم</th>
                    <th className="text-end">الادوات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="holiday-completed">
                    <td>1</td>
                    <td>New Year</td>
                    <td>1 Jan 2022</td>
                    <td>Sunday</td>
                    <td />
                  </tr>
                  <tr className="holiday-completed">
                    <td>2</td>
                    <td>Good Friday</td>
                    <td>14 Apr 2022</td>
                    <td>Friday</td>
                    <td />
                  </tr>
                  <tr className="holiday-completed">
                    <td>3</td>
                    <td>May Day</td>
                    <td>1 May 2022</td>
                    <td>Monday</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr className="holiday-completed">
                    <td>4</td>
                    <td>Memorial Day</td>
                    <td>28 May 2022</td>
                    <td>Monday</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr className="holiday-completed">
                    <td>5</td>
                    <td>Ramzon</td>
                    <td>26 Jun 2022</td>
                    <td>Monday</td>
                    <td />
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>6</td>
                    <td>Bakrid</td>
                    <td>2 Sep 2022</td>
                    <td>Saturday</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_holiday"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>7</td>
                    <td>Deepavali</td>
                    <td>18 Oct 2022</td>
                    <td>Wednesday</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_holiday"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>8</td>
                    <td>Christmas</td>
                    <td>25 Dec 2022</td>
                    <td>Monday</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_holiday"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="modal custom-modal fade" id="add_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">اضافة العطلة</h5>
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
              <form>
                <div className="form-group">
                  <label>
                    اسم العطلة <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>
                    تاريخ العطلة <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      type="text"
                    />
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">ارسال</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal custom-modal fade" id="edit_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">تعديل العطلة</h5>
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
              <form>
                <div className="form-group">
                  <label>
                    العطلة اسم <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    defaultValue="New Year"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>
                    العطلة تاريخ <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="01-01-2022"
                      type="text"
                    />
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal fade"
        id="delete_holiday"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>حذف العطلة</h3>
                <p>هل انت متأكد من الحذف؟</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="#"
                      className="btn btn-primary continue-btn"
                    >
                      حذف
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      الغاء
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/bootstrap-datetimepicker.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
</>

)
}