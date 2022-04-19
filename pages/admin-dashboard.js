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
      <title>لوحة القيادة</title>
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
      <link rel="stylesheet" href="assets/css/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
      <link rel="stylesheet" href="assets/plugins/morris/morris.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <div className="main-wrapper">
        <Header />
        <SideBar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">اهلا الادمن!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">لوحة القيادة</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-cubes" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>112</h3>
                      <span>المشاريع</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-usd" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>44</h3>
                      <span>المشتريات</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-diamond" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>37</h3>
                      <span>المهام</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-user" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>218</h3>
                      <span>الموظفين</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">مجموع المحاضرات</h3>
                        <div id="bar-charts" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">المحاضرات الالكترونية</h3>
                        <div id="line-charts" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-group m-b-30">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">الطلبة الجدد</span>
                        </div>
                        <div>
                          <span className="text-success">+10%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">10</h3>
                      <div className="progress mb-2" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">العدد الكلي 218</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">المكتسبات</span>
                        </div>
                        <div>
                          <span className="text-success">+12.5%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$1,42,300</h3>
                      <div className="progress mb-2" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        الشهر الماضي{" "}
                        <span className="text-muted">$1,15,852</span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">النفقات</span>
                        </div>
                        <div>
                          <span className="text-danger">-2.8%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$8,500</h3>
                      <div className="progress mb-2" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        الشهر الماضي{" "}
                        <span className="text-muted">$7,500</span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">الارباح</span>
                        </div>
                        <div>
                          <span className="text-danger">-75%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$1,12,000</h3>
                      <div className="progress mb-2" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        الشهر الماضي{" "}
                        <span className="text-muted">$1,42,000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
                <div className="card flex-fill dash-statistics">
                  <div className="card-body">
                    <h5 className="card-title">الاحصائيات</h5>
                    <div className="stats-list">
                      <div className="stats-info">
                        <p>
                          اجازات اليوم{" "}
                          <strong>
                            4 <small>/ 65</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "31%" }}
                            aria-valuenow={31}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          الطلبات المنتظرة{" "}
                          <strong>
                            15 <small>/ 92</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "31%" }}
                            aria-valuenow={31}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          المعاملات المنجزة{" "}
                          <strong>
                            85 <small>/ 112</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={62}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          المعاملات الجارية{" "}
                          <strong>
                            190 <small>/ 212</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={62}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          المعاملات المغلقة{" "}
                          <strong>
                            22 <small>/ 212</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "22%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">احصائيات المهام</h4>
                    <div className="statistics">
                      <div className="row">
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>المهام الكلية</p>
                            <h3>385</h3>
                          </div>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>المهام المنجزة</p>
                            <h3>19</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-purple"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        30%
                      </div>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "22%" }}
                        aria-valuenow={18}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        22%
                      </div>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "24%" }}
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        24%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "26%" }}
                        aria-valuenow={14}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        21%
                      </div>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow={14}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        10%
                      </div>
                    </div>
                    <div>
                      <p>
                        <i className="fa fa-dot-circle-o text-purple me-2" />
                        المهام المنجزة <span className="float-end">166</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-warning me-2" />
                        المهام في طور الانجاز <span className="float-end">115</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-success me-2" />
                        المهام المعلقة <span className="float-end">31</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-danger me-2" />
                        المهام المنتظرة <span className="float-end">47</span>
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-dot-circle-o text-info me-2" />
                        المهام تحت المراجعة <span className="float-end">5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">
                      الغياب الكلي{" "}
                      <span className="badge bg-inverse-danger ms-2">5</span>
                    </h4>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <a href="profile.html" className="avatar">
                          <img alt="" src="assets/img/user.jpg" />
                        </a>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-danger">
                            انتظار
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <a href="profile.html" className="avatar">
                          <img alt="" src="assets/img/user.jpg" />
                        </a>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-success">
                            موافقة
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="load-more text-center">
                      <a className="text-dark" href="#">
                        تحميل المزيد
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                  <div className="card-header">
                    <h3 className="card-title mb-0">الفواتير</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-nowrap custom-table mb-0">
                        <thead>
                          <tr>
                            <th>رقم الفاتورة</th>
                            <th>المستحق</th>
                            <th>تاريخ السداد</th>
                            <th>الكلي</th>
                            <th>الحالة</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0001</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">شركة النبع</a>
                              </h2>
                            </td>
                            <td>11 Mar 2019</td>
                            <td>$380</td>
                            <td>
                              <span className="badge bg-inverse-warning">
                                مدفوع جزء
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0002</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">Delta Infotech</a>
                              </h2>
                            </td>
                            <td>8 Feb 2019</td>
                            <td>$500</td>
                            <td>
                              <span className="badge bg-inverse-success">
                                مدفوع
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0003</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">Cream Inc</a>
                              </h2>
                            </td>
                            <td>23 Jan 2019</td>
                            <td>$60</td>
                            <td>
                              <span className="badge bg-inverse-danger">
                                غير مدفوع
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="invoices">عرض كل الفواتير</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                  <div className="card-header">
                    <h3 className="card-title mb-0">المدفوعات</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table custom-table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>رقم الفاتورة</th>
                            <th>المستحق</th>
                            <th>طريقة الدفع</th>
                            <th>تاريخ الدفع</th>
                            <th>المبلغ المدفوع</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0001</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">شركة النبع</a>
                              </h2>
                            </td>
                            <td>نقدي</td>
                            <td>11 Mar 2019</td>
                            <td>$380</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0002</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">Delta Infotech</a>
                              </h2>
                            </td>
                            <td>ماستر كارد</td>
                            <td>8 Feb 2019</td>
                            <td>$500</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view">#INV-0003</a>
                            </td>
                            <td>
                              <h2>
                                <a href="#">Cream Inc</a>
                              </h2>
                            </td>
                            <td>باي بال</td>
                            <td>23 Jan 2019</td>
                            <td>$60</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="payments">عرض كل المدفوعات</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                  <div className="card-header">
                    <h3 className="card-title mb-0">التدريسيين</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table custom-table mb-0">
                        <thead>
                          <tr>
                            <th>الاسم</th>
                            <th>الايميل</th>
                            <th>الحالة</th>
                            <th className="text-end">الادوات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="#" className="avatar">
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-19.jpg"
                                  />
                                </a>
                                <a href="client-profile">
                                  Barry Cuda <span>CEO</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="62000310101b0117060322071a030f120e074c010d0f"
                              >
                                [الايميل محمي]
                              </a>
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-dot-circle-o text-success" />{" "}
                                  نشط
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-success" />{" "}
                                    نشط
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-danger" />{" "}
                                    غير نشط
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="#" className="avatar">
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-19.jpg"
                                  />
                                </a>
                                <a href="client-profile">
                                  Tressa Wexler <span>Manager</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="403432253333213725382c2532002538212d302c256e232f2d"
                              >
                                [الايميل محمي]
                              </a>
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-dot-circle-o text-danger" />{" "}
                                  غير نشط
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-success" />{" "}
                                    نشط
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-danger" />{" "}
                                    غير نشط
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="client-profile.html"
                                  className="avatar"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-07.jpg"
                                  />
                                </a>
                                <a href="client-profile">
                                  Ruby Bartlett <span>CEO</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="4d3f382f342f2c3f39212839390d28352c203d2128632e2220"
                              >
                                [الايميل محمي]
                              </a>
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-dot-circle-o text-danger" />{" "}
                                  غير نشط
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-success" />{" "}
                                    نشط
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-danger" />{" "}
                                    غير نشط
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="client-profile.html"
                                  className="avatar"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-06.jpg"
                                  />
                                </a>
                                <a href="client-profile">
                                  {" "}
                                  Misty Tison <span>CEO</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="f895918b8c818c918b9796b89d80999588949dd69b9795"
                              >
                                [الايميل محمي]
                              </a>
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-dot-circle-o text-success" />{" "}
                                  نشط
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-success" />{" "}
                                    نشط
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-danger" />{" "}
                                    غير نشط
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="client-profile.html"
                                  className="avatar"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-14.jpg"
                                  />
                                </a>
                                <a href="client-profile">
                                  {" "}
                                  Daniel Deacon <span>CEO</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="e98d8887808c858d8c888a8687a98c91888499858cc78a8684"
                              >
                                [الايميل محمي]
                              </a>
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-dot-circle-o text-danger" />{" "}
                                  غير نشط
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-success" />{" "}
                                    نشط
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-dot-circle-o text-danger" />{" "}
                                    غير نشط
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
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
                  <div className="card-footer">
                    <a href="clients">كل التدريسيين</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                  <div className="card-header">
                    <h3 className="card-title mb-0">المشاريع الحالية</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table custom-table mb-0">
                        <thead>
                          <tr>
                            <th>اسم المشروع </th>
                            <th>التقدم</th>
                            <th className="text-end">الادوات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2>
                                <a href="project-view">
                                  Office Management
                                </a>
                              </h2>
                              <small className="block text-ellipsis">
                                <span>1</span>{" "}
                                <span className="text-muted">المهام المفتوحة, </span>
                                <span>9</span>{" "}
                                <span className="text-muted">
                                  المهام المنجزة
                                </span>
                              </small>
                            </td>
                            <td>
                              <div className="progress progress-xs progress-striped">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  data-bs-toggle="tooltip"
                                  title="65%"
                                  style={{ width: "65%" }}
                                />
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2>
                                <a href="project-view">
                                  Project Management
                                </a>
                              </h2>
                              <small className="block text-ellipsis">
                                <span>2</span>{" "}
                                <span className="text-muted">المهام المفتوحة, </span>
                                <span>5</span>{" "}
                                <span className="text-muted">
                                  المهام المنجزة
                                </span>
                              </small>
                            </td>
                            <td>
                              <div className="progress progress-xs progress-striped">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  data-bs-toggle="tooltip"
                                  title="15%"
                                  style={{ width: "15%" }}
                                />
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2>
                                <a href="project-view">
                                  Video Calling App
                                </a>
                              </h2>
                              <small className="block text-ellipsis">
                                <span>3</span>{" "}
                                <span className="text-muted">المهام المفتوحة, </span>
                                <span>3</span>{" "}
                                <span className="text-muted">
                                  المهام المنجزة
                                </span>
                              </small>
                            </td>
                            <td>
                              <div className="progress progress-xs progress-striped">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  data-bs-toggle="tooltip"
                                  title="49%"
                                  style={{ width: "49%" }}
                                />
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2>
                                <a href="project-view">
                                  Hospital Administration
                                </a>
                              </h2>
                              <small className="block text-ellipsis">
                                <span>12</span>{" "}
                                <span className="text-muted">المهام المفتوحة, </span>
                                <span>4</span>{" "}
                                <span className="text-muted">
                                  المهام المنجزة
                                </span>
                              </small>
                            </td>
                            <td>
                              <div className="progress progress-xs progress-striped">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  data-bs-toggle="tooltip"
                                  title="88%"
                                  style={{ width: "88%" }}
                                />
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> حذف
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2>
                                <a href="project-view">
                                  Digital Marketplace
                                </a>
                              </h2>
                              <small className="block text-ellipsis">
                                <span>7</span>{" "}
                                <span className="text-muted">المهام المفتوحة, </span>
                                <span>14</span>{" "}
                                <span className="text-muted">
                                  المهام المنجزة
                                </span>
                              </small>
                            </td>
                            <td>
                              <div className="progress progress-xs progress-striped">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  data-bs-toggle="tooltip"
                                  title="100%"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </td>
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
                                  >
                                    <i className="fa fa-pencil m-r-5" /> تعديل
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
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
                  <div className="card-footer">
                    <a href="projects">كل المشاريع</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}
