import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import component
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
