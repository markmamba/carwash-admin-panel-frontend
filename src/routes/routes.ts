import Home from "../pages/Home";
import CarwashReportList from "../pages/CarwashReportList";
import CarwashReportTable from "../pages/CarwashReportTable";
import Staff from "../pages/Staff";
import Expense from "../pages/Expense";
import Service from "../pages/Service";
import User from "../pages/User";

import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import GarageIcon from '@mui/icons-material/Garage';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    icon: HomeIcon,
    exact: true,
  },
  {
    name: 'Carwash List',
    path: '/list',
    component: CarwashReportList,
    icon: FormatListNumberedIcon,
  },
  {
    name: 'Sales Reports',
    path: '/sales',
    component: CarwashReportTable,
    icon: AssessmentIcon,
  },
  {
    name: 'Expense',
    path: '/expense',
    component: Expense,
    icon: PaymentsIcon,
  },
  {
    name: 'Staff',
    path: '/staff',
    component: Staff,
    icon: PeopleIcon,
  },
  {
    name: 'Service',
    path: '/services',
    component: Service,
    icon: GarageIcon,
  },
  {
    name: 'User',
    path: '/users',
    component: User,
    icon: PersonAddIcon,
  },
];

export default routes;
