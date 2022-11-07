import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";

function App() {
  return (
    <div data-theme="emerald">
      <h2>
        <RouterProvider router={router}></RouterProvider>
      </h2>
    </div>
  );
}

export default App;
