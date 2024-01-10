import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />} errorElement={<Page404 />}>
        <Route path="" element={<Hero />} />
        <Route path="/courses">
          <Route index={true} element={<Courses />} />
          <Route path=":courseId" element={<Details />} />
        </Route>
        <Route path="/learn/:courseId" element={<Learn />}>
          <Route path="chapter/:chapterId" element={<Chapter />} />
        </Route>
      </Route>
    )
  );


  // const browserRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Nav />,
  //     errorElement: <Page404 />,
  //     children: [
  //       { path: "", element: <Hero /> },
  //       {
  //         path: "/courses",
  //         children: [
  //           { index: true, element: <Courses /> },
  //           { path: ":courseId", element: <Details /> },
  //         ],
  //       },
  //       {
  //         path: "/learn/:courseId",
  //         element: <Learn />,
  //         children: [{ path: "chapter/:chapterId", element: <Chapter /> }],
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
