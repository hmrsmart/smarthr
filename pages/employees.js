import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Employee() {
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
  <title>الموظفين</title>
  <link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/line-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/style.css" />

  <div className="main-wrapper">
    <Header />
    <SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">الموظفين</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">لوحة القيادة</a>
                </li>
                <li className="breadcrumb-item active">الموظفين</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_employee"
              >
                <i className="fa fa-plus" /> اضافة موظف
              </a>
              <div className="view-icons">
                <a
                  href="employees"
                  className="grid-view btn btn-link active"
                >
                  <i className="fa fa-th" />
                </a>
                <a
                  href="employees-list"
                  className="list-view btn btn-link"
                >
                  <i className="fa fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">رقم الموظف</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">اسم الموظف</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>اختر الاختصاص</option>
                <option>Web Developer</option>
                <option>Web Designer</option>
                <option>Android Developer</option>
                <option>Ios Developer</option>
              </select>
              <label className="focus-label">الاختصاص</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="d-grid">
              <a href="#" className="btn btn-success w-100">
                {" "}
                بحث{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row staff-grid-row">
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="assets/img/profiles/avatarhmr.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">حسين محمد</a>
              </h4>
              <div className="small text-muted">Web Designer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-09.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Richard Miles</a>
              </h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-10.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">John Smith</a>
              </h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-05.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Mike Litorus</a>
              </h4>
              <div className="small text-muted">IOS Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-11.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Wilmer Deluna</a>
              </h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-12.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Jeffrey Warden</a>
              </h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-13.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Bernardo Galaviz</a>
              </h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-01.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Lesley Grauer</a>
              </h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-16.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Jeffery Lalor</a>
              </h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-04.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Loren Gatlin</a>
              </h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-03.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Tarah Shropshire</a>
              </h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <a href="profile" className="avatar">
                  <img src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/profiles/avatar-08.jpg" alt="" />
                </a>
              </div>
              <div className="dropdown profile-action">
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
                    data-bs-target="#edit_employee"
                  >
                    <i className="fa fa-pencil m-r-5" /> تعديل
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                  >
                    <i className="fa fa-trash-o m-r-5" /> حذف
                  </a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile">Catherine Manseau</a>
              </h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div id="add_employee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">اضافة موظف</h5>
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        الاسم الاول <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الاسم الاخير</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        اسم المستخدم <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        الايميل <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الباسوورد</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">تاكيد الباسوورد</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        رقم الموظف <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        تاريخ التعيين <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الموبايل </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الكلية</label>
                      <select className="select">
                        <option value="">رئاسة الجامعة</option>
                        <option value={1}>كلية معلوماتية الاعمال</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        القسم <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>المدن الذكية</option>
                        <option>مكتب رئيس الجامعة</option>
                        <option>شؤون الموظفين</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        الاختصاص <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>اختر الاختصاص</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>الصلاحيات</th>
                        <th className="text-center">قراءة</th>
                        <th className="text-center">كتابة</th>
                        <th className="text-center">انشاء</th>
                        <th className="text-center">حذف</th>
                        <th className="text-center">استيراد</th>
                        <th className="text-center">تصدير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>العطل</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>الاجازات</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>الطلبة</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>المشاريع</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>المهام</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>المراسلات</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>الممتلكات</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>جدول التوقيتات</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="edit_employee" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">تعديل موظف</h5>
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        الاسم الاول <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="John"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الاسم الاخير</label>
                      <input
                        className="form-control"
                        defaultValue="Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        اسم المستخدم <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        الايميل <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الباسوورد</label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">تاكيد الباسوورد</label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        رقم الموظف <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="FT-0001"
                        readOnly=""
                        className="form-control floating"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        تاريخ التعيين <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">الموبايل </label>
                      <input
                        className="form-control"
                        defaultValue={9876543210}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Company</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                        <option value="">International Software Inc</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Department <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Write</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">حذف</th>
                        <th className="text-center">Import</th>
                        <th className="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal fade"
        id="delete_employee"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>حذف Employee</h3>
                <p>Are you sure want to delete?</p>
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
                      Cancel
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
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/select2.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/bootstrap-datetimepicker.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
</>

  );
}
