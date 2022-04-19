import Link from "next/link";


export default function IndexPage() {
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
      <title>Login - HRMS admin template</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/img/favicon.png"
      />
      <link rel="stylesheet" href="assets/css/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      {/*[if lt IE 9]>
			
			
		<![endif]*/}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                <form action="admin-dashboard">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="admin@dreamguys.in"
                    />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <a className="text-muted" href="forgot-password.html">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="position-relative">
                      <input
                        className="form-control"
                        type="password"
                        defaultValue={123456}
                        id="password"
                      />
                      <span className="fa fa-eye-slash" id="toggle-password" />
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <a href="register.html">Register</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
