import Booking from './pages/booking';
import confirmedBooking from './pages/confirmaedBooking';
import Home from "./pages/home";
import UnserConstroction from './pages/underConstroction';

export default [
  { path: "/", component: Home, name:"Home" },
  { path: "/about", component: UnserConstroction, name:"About" },
  { path: "/menu", component: UnserConstroction, name:"Menu" },
  { path: "/booking", component: Booking, name:"Booking" },
  { path: "/confirmed-booking", component: confirmedBooking},
  { path: "/order-online", component: UnserConstroction, name: 'Order Online' },
  { path: "/login", component: UnserConstroction , name:"Login" },
];
