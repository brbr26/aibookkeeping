import { lazy } from "react";
import Index from "./pages/Index";

// Lazy load other pages
const Services = lazy(() => import("./pages/Services"));
const Login = lazy(() => import("./pages/Login"));
const Industries = lazy(() => import("./pages/Industries"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const LawFirms = lazy(() => import("./pages/LawFirms"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const Construction = lazy(() => import("./pages/Construction"));
const Contact = lazy(() => import("./pages/Contact"));
const Startups = lazy(() => import("./pages/Startups"));
const HomeServices = lazy(() => import("./pages/HomeServices"));
const NonProfits = lazy(() => import("./pages/NonProfits"));
const Blog = lazy(() => import("./pages/Blog"));
const Franchises = lazy(() => import("./pages/Franchises"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const RealEstate = lazy(() => import("./pages/RealEstate"));
const Churches = lazy(() => import("./pages/Churches"));

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}

export const routes: RouteConfig[] = [
  { path: "/", element: Index },
  { path: "/services", element: Services },
  { path: "/login", element: Login },
  { path: "/industries", element: Industries },
  { path: "/contact", element: Contact },
  { path: "/ecommerce", element: Ecommerce },
  { path: "/law-firms", element: LawFirms },
  { path: "/healthcare", element: Healthcare },
  { path: "/construction", element: Construction },
  { path: "/startups", element: Startups },
  { path: "/home-services", element: HomeServices },
  { path: "/non-profits", element: NonProfits },
  { path: "/blog", element: Blog },
  { path: "/franchises", element: Franchises },
  { path: "/restaurants", element: Restaurants },
  { path: "/real-estate", element: RealEstate },
  { path: "/churches", element: Churches },
];