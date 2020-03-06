import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

// import { routes } from "./route";

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/Stocks", component: Stocks }
];
