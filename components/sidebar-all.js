export default function SideBar() {
  return(
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
                <li className="submenu">
                  <a href="#">
                    <i className="la la-cube" /> <span> Apps</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="chat">Chat</a>
                    </li>
                    <li className="submenu">
                      <a href="#">
                        <span> Calls</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="voice-call">Voice Call</a>
                        </li>
                        <li>
                          <a href="video-call">Video Call</a>
                        </li>
                        <li>
                          <a href="outgoing-call">Outgoing Call</a>
                        </li>
                        <li>
                          <a href="incoming-call">Incoming Call</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="events">Calendar</a>
                    </li>
                    <li>
                      <a href="contacts">Contacts</a>
                    </li>
                    <li>
                      <a href="inbox">Email</a>
                    </li>
                    <li>
                      <a href="file-manager">File Manager</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Employees</span>
                </li>
                <li className="submenu">
                  <a href="#" className="noti-dot">
                    <i className="la la-user" /> <span> Employees</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="employees">All Employees</a>
                    </li>
                    <li>
                      <a href="holidays">Holidays</a>
                    </li>
                    <li>
                      <a href="leaves">
                        Leaves (Admin){" "}
                        <span className="badge rounded-pill bg-primary float-end">
                          1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="leaves-employee">Leaves (Employee)</a>
                    </li>
                    <li>
                      <a href="leave-settings">Leave Settings</a>
                    </li>
                    <li>
                      <a href="attendance">Attendance (Admin)</a>
                    </li>
                    <li>
                      <a href="attendance-employee">
                        Attendance (Employee)
                      </a>
                    </li>
                    <li>
                      <a href="departments">Departments</a>
                    </li>
                    <li>
                      <a href="designations">Designations</a>
                    </li>
                    <li>
                      <a href="timesheet">Timesheet</a>
                    </li>
                    <li>
                      <a href="shift-scheduling">Shift &amp; Schedule</a>
                    </li>
                    <li>
                      <a href="overtime">Overtime</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="clients">
                    <i className="la la-users" /> <span>Clients</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-rocket" /> <span> Projects</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="projects">Projects</a>
                    </li>
                    <li>
                      <a href="tasks">Tasks</a>
                    </li>
                    <li>
                      <a href="task-board">Task Board</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="leads">
                    <i className="la la-user-secret" /> <span>Leads</span>
                  </a>
                </li>
                <li>
                  <a href="tickets">
                    <i className="la la-ticket" /> <span>Tickets</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>HR</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-files-o" /> <span> Sales </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="estimates">Estimates</a>
                    </li>
                    <li>
                      <a href="invoices">Invoices</a>
                    </li>
                    <li>
                      <a href="payments">Payments</a>
                    </li>
                    <li>
                      <a href="expenses">Expenses</a>
                    </li>
                    <li>
                      <a href="provident-fund">Provident Fund</a>
                    </li>
                    <li>
                      <a href="taxes">Taxes</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-files-o" /> <span> Accounting </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="categories">Categories</a>
                    </li>
                    <li>
                      <a href="budgets">Budgets</a>
                    </li>
                    <li>
                      <a href="budget-expenses">Budget Expenses</a>
                    </li>
                    <li>
                      <a href="budget-revenues">Budget Revenues</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-money" /> <span> Payroll </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="salary"> Employee Salary </a>
                    </li>
                    <li>
                      <a href="salary-view"> Payslip </a>
                    </li>
                    <li>
                      <a href="payroll-items"> Payroll Items </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="policies">
                    <i className="la la-file-pdf-o" /> <span>Policies</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="expense-reports"> Expense Report </a>
                    </li>
                    <li>
                      <a href="invoice-reports"> Invoice Report </a>
                    </li>
                    <li>
                      <a href="payments-reports"> Payments Report </a>
                    </li>
                    <li>
                      <a href="project-reports"> Project Report </a>
                    </li>
                    <li>
                      <a href="task-reports"> Task Report </a>
                    </li>
                    <li>
                      <a href="user-reports"> User Report </a>
                    </li>
                    <li>
                      <a href="employee-reports"> Employee Report </a>
                    </li>
                    <li>
                      <a href="payslip-reports"> Payslip Report </a>
                    </li>
                    <li>
                      <a href="attendance-reports"> Attendance Report </a>
                    </li>
                    <li>
                      <a href="leave-reports"> Leave Report </a>
                    </li>
                    <li>
                      <a href="daily-reports"> Daily Report </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Performance</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-graduation-cap" />{" "}
                    <span> Performance </span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="performance-indicator">
                        {" "}
                        Performance Indicator{" "}
                      </a>
                    </li>
                    <li>
                      <a href="performance"> Performance Review </a>
                    </li>
                    <li>
                      <a href="performance-appraisal">
                        {" "}
                        Performance Appraisal{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="goal-tracking"> Goal List </a>
                    </li>
                    <li>
                      <a href="goal-type"> Goal Type </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-edit" /> <span> Training </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="training"> Training List </a>
                    </li>
                    <li>
                      <a href="trainers"> Trainers</a>
                    </li>
                    <li>
                      <a href="training-type"> Training Type </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="promotion">
                    <i className="la la-bullhorn" /> <span>Promotion</span>
                  </a>
                </li>
                <li>
                  <a href="resignation">
                    <i className="la la-external-link-square" />{" "}
                    <span>Resignation</span>
                  </a>
                </li>
                <li>
                  <a href="termination">
                    <i className="la la-times-circle" />{" "}
                    <span>Termination</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Administration</span>
                </li>
                <li>
                  <a href="assets">
                    <i className="la la-object-ungroup" /> <span>Assets</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="user-dashboard"> User Dasboard </a>
                    </li>
                    <li>
                      <a href="jobs-dashboard"> Jobs Dasboard </a>
                    </li>
                    <li>
                      <a href="jobs"> Manage Jobs </a>
                    </li>
                    <li>
                      <a href="manage-resumes"> Manage Resumes </a>
                    </li>
                    <li>
                      <a href="shortlist-candidates">
                        {" "}
                        Shortlist Candidates{" "}
                      </a>
                    </li>
                    <li>
                      <a href="interview-questions">
                        {" "}
                        Interview Questions{" "}
                      </a>
                    </li>
                    <li>
                      <a href="offer_approvals"> Offer Approvals </a>
                    </li>
                    <li>
                      <a href="experiance-level"> Experience Level </a>
                    </li>
                    <li>
                      <a href="candidates"> Candidates List </a>
                    </li>
                    <li>
                      <a href="schedule-timing"> Schedule timing </a>
                    </li>
                    <li>
                      <a href="apptitude-result"> Aptitude Results </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="knowledgebase">
                    <i className="la la-question" /> <span>Knowledgebase</span>
                  </a>
                </li>
                <li>
                  <a href="activities">
                    <i className="la la-bell" /> <span>Activities</span>
                  </a>
                </li>
                <li>
                  <a href="users">
                    <i className="la la-user-plus" /> <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="settings">
                    <i className="la la-cog" /> <span>Settings</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-user" /> <span> Profile </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="profile"> Employee Profile </a>
                    </li>
                    <li>
                      <a href="client-profile"> Client Profile </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-key" /> <span> Authentication </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="index"> Login </a>
                    </li>
                    <li>
                      <a href="register"> Register </a>
                    </li>
                    <li>
                      <a href="forgot-password"> Forgot Password </a>
                    </li>
                    <li>
                      <a href="otp"> OTP </a>
                    </li>
                    <li>
                      <a href="lock-screen"> Lock Screen </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-exclamation-triangle" />{" "}
                    <span> Error Pages </span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="error-404">404 Error </a>
                    </li>
                    <li>
                      <a href="error-500">500 Error </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-hand-o-up" />{" "}
                    <span> Subscriptions </span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="subscriptions"> Subscriptions (Admin) </a>
                    </li>
                    <li>
                      <a href="subscriptions-company">
                        {" "}
                        Subscriptions (Company){" "}
                      </a>
                    </li>
                    <li>
                      <a href="subscribed-companies">
                        {" "}
                        Subscribed Companies
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-columns" /> <span> Pages </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="search"> Search </a>
                    </li>
                    <li>
                      <a href="faq"> FAQ </a>
                    </li>
                    <li>
                      <a href="terms"> Terms </a>
                    </li>
                    <li>
                      <a href="privacy-policy"> Privacy Policy </a>
                    </li>
                    <li>
                      <a href="blank-page"> Blank Page </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li>
                  <a href="components">
                    <i className="la la-puzzle-piece" /> <span>Components</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-object-group" /> <span> Forms </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="form-basic-inputs">Basic Inputs </a>
                    </li>
                    <li>
                      <a href="form-input-groups">Input Groups </a>
                    </li>
                    <li>
                      <a href="form-horizontal">Horizontal Form </a>
                    </li>
                    <li>
                      <a href="form-vertical"> Vertical Form </a>
                    </li>
                    <li>
                      <a href="form-mask"> Form Mask </a>
                    </li>
                    <li>
                      <a href="form-validation"> Form Validation </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-table" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="tables-basic">Basic Tables </a>
                    </li>
                    <li>
                      <a href="data-tables">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <a href="#">
                    <i className="la la-file-text" /> <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="la la-info" /> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v3.4</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li className="submenu">
                      <a href="#">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="#">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="#">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow" />
                          </a>
                          <ul style={{ display: "none" }}>
                            <li>
                              <a href="#">Level 3</a>
                            </li>
                            <li>
                              <a href="#">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
)
}