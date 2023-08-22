import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiTable } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { TbFileCertificate } from "react-icons/tb";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineShareAlt } from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { HiOutlineReply } from "react-icons/hi";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";

const Menus = [
  { title: "Dashboard", link: "/" },
  {
    title: "Buy & Sell",
    icon: <AiOutlineDropbox />,
    link: "/buySell",
  },
  { title: "Trading", icon: "", link: "/trading" },
  {
    title: "Marketcap",
    icon: <AiOutlineBarChart />,
    link: "/marketcap",
  },
  {
    title: "Transaction",
    icon: <HiOutlineReply />,
    items: [
      { title: "View Transaction", link: "/viewTransaction" },
      { title: "Transaction Search", link: "/transactionSearch" },
      { title: "Single Transaction", link: "/singleTransaction" },
    ],
  },
  { title: "Wallet", icon: <GiWallet />, link: "/wallet" },
  {
    title: "Apps",
    icon: <AiOutlineAppstore />,
    items: [
      { title: "Chats", link: "/chat" },
      {
        title: "Calls",
        items: [
          { title: "Voice Call", link: "/voiceCall" },
          { title: "Vidoe Call", link: "/videoCall" },
          { title: "Incoming Call", link: "/incomingCall" },
        ],
      },
      { title: "Calendar", link: "/calendar" },
      { title: "Email", link: "/email" },
    ],
  },
  {
    title: "Employees",
    icon: <AiOutlineMenuUnfold />,
    items: [
      { title: "Employees List", link: "/employeesList" },
      { title: "Leaves", link: "/leaves" },
      { title: "Holidays", link: "/holidays" },
      { title: "Attendance", link: "/attendance" },
    ],
  },
  {
    title: "Accounts",
    icon: <MdSwitchAccount />,
    items: [
      { title: "Invoices", link: "/invoices" },
      { title: "Payments", link: "/payments" },
      { title: "Expenses", link: "/expenses" },
      { title: "Taxes", link: "/taces" },
      { title: "Provident Funt", link: "/providentFunt" },
    ],
  },
  {
    title: "Payyroll",
    icon: <FaUsers />,
    items: [
      { title: "Employee Salary", link: "/employeeSalary" },
      { title: "Payslip", link: "/payslip" },
    ],
  },
  {
    title: "Activities",
    icon: <BsFillGrid1X2Fill />,
    link: "/activities",
  },
  {
    title: "Reports",
    icon: <TbReportAnalytics />,
    items: [
      { title: "Expense Report", link: "/expenseReport" },
      { title: "Invoice Report", link: "/invoiceReport" },
    ],
  },
  {
    title: "Settings",
    icon: <AiOutlineSetting />,
    link: "/settings",
  },
  {
    title: "Components",
    icon: <HiDesktopComputer />,
    items: [
      { title: "UI Kit", link: "/uiKit" },
      { title: "Typography", link: "/typography" },
      { title: "Tabs", link: "/tabs" },
    ],
  },
  {
    title: "Elements",
    icon: <BsFillBoxSeamFill />,
    items: [
      { title: "Sweet Alerts", link: "/sweetAlerts" },
      { title: "Tooltip", link: "/tooltip" },
      { title: "Popever", link: "/popever" },
      { title: "Ribbon", link: "/ribbon" },
      { title: "Clipboard", link: "/clipboard" },
      { title: "Drag & Drop", link: "/dragDrop" },
      { title: "Range Slider", link: "/rangeSlider" },
      { title: "Rating", link: "/Rating" },
      { title: "Toastr", link: "/Toastr" },
      { title: "Text Editor", link: "/textEditor" },
      { title: "Counter", link: "/counter" },
      { title: "Scrollbar", link: "/scrollbar" },
      { title: "Spinner", link: "/spinner" },
      { title: "Clipboard", link: "/clipboard" },
      { title: "Notification", link: "/notification" },
      { title: "Lightbox", link: "/lightbox" },
      { title: "Sticky Note", link: "/stikyNote" },
      { title: "Timeline", link: "/timeline" },
      { title: "Horizontal Timeline", link: "/horizontalTimeline" },
      { title: "Form Wizard", link: "/formWizard" },
    ],
  },
  {
    title: "Icons",
    icon: <TbFileCertificate />,
    items: [
      { title: "Fontawesome Icons", link: "/fontawesomeIcons" },
      { title: "Feather Icons", link: "/featherIcons" },
      { title: "Ionic Icons", link: "/ionicIcons" },
      { title: "Material Icons", link: "/materialIcons" },
      { title: "Pe& Icons", link: "/pe7Icons" },
      { title: "Simpleline Icons", link: "/simplelineIcons" },
      { title: "Themify Icons", link: "/themifyIcons" },
      { title: "Weather Icons", link: "/weatherIcons" },
      { title: "Typicon Icons", link: "/typiconIcons" },
      { title: "Flag Icons", link: "/flagIcons" },
    ],
  },
  {
    title: "Forms",
    icon: <BiEdit />,
    items: [
      { title: "Basic Inputs", link: "/basicInputs" },
      { title: "Input Groups", link: "/inputGroups" },
      { title: "Horizoltal Form", link: "/horizontalForm" },
      { title: "Vertical Form", link: "/verticalForm" },
      { title: "Form Mask", link: "/formMask" },
      { title: "Form Validation", link: "/formValidation" },
      { title: "Form Select2", link: "/formSelect2" },
      { title: "File Upload", link: "/fileUpload" },
    ],
  },
  {
    title: "Tables",
    icon: <BiTable />,
    items: [
      { title: "Basic Table", link: "/basicTable" },
      { title: "Data Table", link: "/dataTable" },
    ],
  },
  {
    title: "Charts",
    icon: <AiOutlineAreaChart />,
    items: [
      { title: "Morris Charts", link: "/morrisChart" },
      { title: "Am4charts", link: "/am4charts" },
      { title: "Apex Charts", link: "/apexCharts" },
      { title: "Charts JS", link: "/chartsJs" },
      { title: "Flot Charts", link: "/flot Charts" },
      { title: "Piety Charts", link: "/pietyCharts" },
      { title: "C3 Charts", link: "/c3Charts" },
    ],
  },
  {
    title: "Pages",
    icon: <SiPowerpages />,
    items: [
      { title: "Login", link: "/login" },
      { title: "Register", link: "/register" },
      { title: "Forgot Password", link: "/forgotPassword" },
      { title: "Change Password", link: "/changePassword" },
      { title: "Lock Screen", link: "/lockScreen" },
      { title: "Profile", link: "/profile" },
      { title: "404 Error", link: "/error404" },
      { title: "500 Error", link: "/error500" },
      { title: "Blank Page", link: "/typiconIcons" },
    ],
  },
  {
    title: "Multi Level",
    icon: <AiOutlineShareAlt />,
    items: [
      {
        title: "Level 1",
        items: [
          { title: "Level 2" },
          { title: "Level 3" },
          { title: "Level 4" },
        ],
      },
      { title: "Level 2" },
    ],
  },
];

export default Menus;
