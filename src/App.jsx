import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";
import Dashboard from "./views/Home";
import Marketcap from "./views/Marketcap";
import Actives from "./views/Actives";
import View from "./views/Transactions/ViewTransaction";
import Trading from "./views/Trading";
import Search from "./views/Transactions/SearchTransaction";
import SingleTransaction from "./views/Transactions/SingleTransaction";
import Wallet from "./views/Wallet";
import Settings from "./views/Settings";
import Email from "./views/Email";
import EmployeeList from "./views/Employee/EmployeeList";
import AddEmployee from "./components/Employee/AddEmployee";
import Blank from "./views/Pages/Blank";
import Page1 from "./views/Pages/Page1";
import Eror404 from "./views/Pages/Page2";
import Login from "./views/Pages/Login";
import Forget from "./views/Pages/ForgetPassword";
import Register from "./views/Pages/Register";
import LookScreen from "./views/Pages/LookScreen";
import ChangePassword from "./views/Pages/ChangePassword";
import Profile from "./views/Pages/Profile";
import Payments from "./views/Accounts/Payments";
import Invoices from "./views/Accounts/Invoices";
import Taxes from "./views/Accounts/Taxes";
import AddUsers from "./components/Accounts/AddUsers";
import Leaves from "./components/Employee/Leaves";
import AddLeave from "./components/Employee/AddLeave";
import Holiday from "./components/Employee/Holiday";
import AddHoliday from "./components/Employee/AddHoliday";
import Attendance from "./components/Employee/Attendace";
import Expences from "./views/Accounts/Expences";
import ProvidentFund from "./views/Accounts/Provident Fund";
import EmloyeeSolory from "./views/Payrroll/EmloyeeSolory";
import Payslip from "./views/Payrroll/Payslip";
import ExpenceReport from "./views/Reports/ExpenceReport";
import InvoiceReport from "./views/Reports/InvoiceReport";

function App() {
  return (
    <div className="App">
      <div className="overflow-y-scroll h-screen overflow-x-hidden Scroll hidden lg:block">
        <SideBar />
      </div>
      <div className="overflow-y-scroll h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/marketcap" element={<Marketcap />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/activities" element={<Actives />} />
          <Route path="/viewTransaction" element={<View />} />
          <Route path="/transactionSearch" element={<Search />} />
          <Route path="/singleTransaction" element={<SingleTransaction />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/employeesList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/addLeave" element={<AddLeave />} />
          <Route path="/holidays" element={<Holiday />} />
          <Route path="/addHoliday" element={<AddHoliday />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/email" element={<Email />} />
          <Route path="/typiconIcons" element={<Blank/>} />
          <Route path="/error500" element={<Page1/>} />
          <Route path="/error404" element={<Eror404/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotPassword" element={<Forget/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/lockScreen" element={<LookScreen/>}/>
          <Route path="/changePassword" element={<ChangePassword/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/invoices" element={<Invoices/>} />
          <Route path="/taces" element={<Taxes/>}/>
          <Route path="/TaxesAddUsers" element={<AddUsers/>}/>
          <Route path="/typiconIcons" element={<Blank />} />
          <Route path="/error500" element={<Page1 />} />
          <Route path="/error404" element={<Eror404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<Forget />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockScreen" element={<LookScreen />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/expenses" element={<Expences/>}/>
          <Route path="/providentFunt" element={<ProvidentFund/>} />
          <Route path="/employeeSalary" element={<EmloyeeSolory/>}/>
          <Route path="/payslip" element={<Payslip/>}/>
          <Route path="/expenseReport" element={<ExpenceReport/>} />
          <Route path="/invoiceReport" element={<InvoiceReport/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
