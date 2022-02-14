type Route = {
  to: string;
  pageTitle: string;
  pageNumber: string;
};
const routes: Array<Route> = [
  {
    to: "/",
    pageTitle: "home",
    pageNumber: "00",
  },
  {
    to: "/destination",
    pageTitle: "destination",
    pageNumber: "01",
  },
  {
    to: "/crew",
    pageTitle: "crew",
    pageNumber: "02",
  },
  {
    to: "/technology",
    pageTitle: "technology",
    pageNumber: "03",
  },
];

export default routes;
