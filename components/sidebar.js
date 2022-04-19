export default function SideBar() {
  return(
    <>
    <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>الرئيسية</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-dashboard" /> <span> لوحة القيادة</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a className="active" href="admin-dashboard">
                        لوحة قيادة الادمن
                      </a>
                    </li>
                    <li>
                      <a href="employee-dashboard">لوحة قيادة الموظف</a>
                    </li>
                  </ul>
                </li>              
                <li className="menu-title">
                  <span>الموظفين</span>
                </li>
                <li className="submenu">
                  <a href="#" className="noti-dot">
                    <i className="la la-user" /> <span> الموظفين</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="employees">كل الموظفين</a>
                    </li>
                    <li>
                      <a href="holidays">العطل</a>
                    </li>
                    <li>
                      <a href="leaves">
                        الاجازات (الادمن){" "}
                        <span className="badge rounded-pill bg-primary float-end">
                          1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="leaves-employee">الاجازات (الموظف)</a>
                    </li>
                    <li>
                      <a href="leave-settings">اعدادات الاجازات</a>
                    </li>
                    <li>
                      <a href="attendance">الحضور (الادمن)</a>
                    </li>
                    <li>
                      <a href="attendance-employee">
                        الحضور (الموظف)
                      </a>
                    </li>
                    <li>
                      <a href="departments">الاقسام</a>
                    </li>
                    <li>
                      <a href="designations">التخصصات</a>
                    </li>
                    <li>
                      <a href="timesheet">جدول الحضور</a>
                    </li>
                    <li>
                      <a href="shift-scheduling">الخفارات</a>
                    </li>
                    <li>
                      <a href="overtime">الوقت الاضافي</a>
                    </li>
                  </ul>
                </li> 
                <li className="submenu">
                  <a href="#">
                    <i className="la la-files-o" /> <span> الحسابات </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="categories">التبويب</a>
                    </li>
                    <li>
                      <a href="budgets">الميزانية</a>
                    </li>
                    <li>
                      <a href="budget-expenses">ميزانية المصاريف</a>
                    </li>
                    <li>
                      <a href="budget-revenues">ميزانية الارباح</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-money" /> <span> الرواتب </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="salary"> رواتب الموظفين </a>
                    </li>
                    <li>
                      <a href="salary-view"> قسيمة الراتب </a>
                    </li>
                    <li>
                      <a href="payroll-items"> المخصصات </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/jquery.slimscroll.min.js"></script>
    </>
)
}