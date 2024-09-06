import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components";
import { logout, login } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <p className="min-h-screen text-white bg-black">Loading...</p>;
  }
}

export default App;
