import Main from "../Layout/Main/Main";
import Blog from "../pages/blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AddReview from "../pages/Reviews/AddReview";
import MyReviews from "../pages/Reviews/MyReviews";
import UpdateReview from "../pages/Reviews/UpdateReview";
import AddService from "../pages/Services/AddService";
import AllServices from "../pages/Services/AllServices";
import ServiceDetails from "../pages/Services/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReviews/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://service-review-assignment-server-shahiduzzamansony.vercel.app/allservices/${params.id}`
          ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-assignment-server-shahiduzzamansony.vercel.app/allservices/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/updatereview",
        element: <UpdateReview></UpdateReview>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="text-center text-6xl py-64">404 Page Not Found</div>
    ),
  },
]);

export default router;
