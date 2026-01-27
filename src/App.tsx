// ...existing code...
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { initAOS } from './utils/functions';
import { Outlet } from "react-router-dom";
import BackToTop from "./components/common/BackToTop";
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const App = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    /* ================== START: App Layout ================== */
    <div className="min-h-screen bg-background text-sm sm:text-base">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Header (common) */}
      <Header />
      {/* Route outlet for page sections */}
      <main>
        <Outlet />
      </main>
      {/* Footer (common) */}
      <Footer />
      {/* Back to Top Button */}
      <BackToTop />
    </div>
    /* ================== END: App Layout ================== */
  );
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default App;
/* ================== END: Export ================== */