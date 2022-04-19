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
  <title>تفاصيل الراتب</title>
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/img/favicon.png"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/bootstrap.rtl.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/line-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/css/style.css"
  />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    <Header />
    <SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">شريط الراتب</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">لوحة القيادة</a>
                </li>
                <li className="breadcrumb-item active">شريط الراتب</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <div className="btn-group btn-group-sm">
                <button className="btn btn-white">CSV</button>
                <button className="btn btn-white">PDF</button>
                <button className="btn btn-white">
                  <i className="fa fa-print fa-lg" /> Print
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="payslip-title">
                  شريط الراتب لشهر اذار سنة 2022
                </h4>
                <div className="row">
                  <div className="col-sm-6 m-b-20">
                    <img
                      src="assets/img/logo.png"
                      className="inv-logo"
                      alt=""
                    />
                    <ul className="list-unstyled mb-0">
                      <li>جامعة تكنولوجيا المعلومات والاتصالات</li>
                      <li>بغداد-شارع النضال</li>
                      <li>صندوق بريد 4343</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 m-b-20">
                    <div className="invoice-details">
                      <h3 className="text-uppercase">شريط الراتب #49029</h3>
                      <ul className="list-unstyled">
                        <li>
                          راتب شهر: <span>اذار, 2022</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 m-b-20">
                    <ul className="list-unstyled">
                      <li>
                        <h5 className="mb-0">
                          <strong>حسين محمد رضا</strong>
                        </h5>
                      </li>
                      <li>
                        <span>Web Designer</span>
                      </li>
                      <li>رقم الموظف: FT-0009</li>
                      <li>Joining Date: 1 Jan 2013</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <h4 className="m-b-10">
                        <strong>المستحقات</strong>
                      </h4>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>
                              <strong>الراتب الاسمي</strong>{" "}
                              <span className="float-end">$6500</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>الزوجية</strong>{" "}
                              <span className="float-end">$55</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>اجور النقل</strong>{" "}
                              <span className="float-end">$55</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>الاجور الاخرى</strong>{" "}
                              <span className="float-end">$55</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>المجموع</strong>{" "}
                              <span className="float-end">
                                <strong>$55</strong>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h4 className="m-b-10">
                        <strong>الاستقطاعات</strong>
                      </h4>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>
                              <strong>الضريبة</strong>{" "}
                              <span className="float-end">$0</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>التقاعد</strong>{" "}
                              <span className="float-end">$0</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>اخرى</strong>{" "}
                              <span className="float-end">$0</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>السلف والقروض</strong>{" "}
                              <span className="float-end">$300</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>المجموع</strong>{" "}
                              <span className="float-end">
                                <strong>$59698</strong>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <p>
                      <strong>الراتب النهائي: $59698</strong> (تسعة وخمسين الف وستمائة وثمانية وتسعين دولار فقط.)
                    </p>
                  </div>
                </div>
              </div>
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