import { Home, Plane, Hotel, Utensils, Calendar, CreditCard, Map } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Flights",
    to: "/flights",
    icon: <Plane className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Accommodations",
    to: "/accommodations",
    icon: <Hotel className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Activities",
    to: "/activities",
    icon: <Utensils className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <Calendar className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Expenses",
    to: "/expenses",
    icon: <CreditCard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Map",
    to: "/map",
    icon: <Map className="h-4 w-4" />,
    page: <Index />,
  },
];
