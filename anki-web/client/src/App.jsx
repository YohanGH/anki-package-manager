import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import component
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  const location = useLocation();
  const noFooter = ["/signIn"]

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
      {noFooter.includes(location.pathname) === false && <Footer />}
    </>
  );
}

export default App;
