import "./App.css";

import NavBar from "./components/common/navBar";
import { Routes, Route } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Movies from "./components/movies";
import ErrorPage from "./components/common/errorPage";
import MovieForm from "./components/common/movieForm";
import LoginForm from "./components/common/loginForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":id" element={<MovieForm />} />
          <Route path="customers" element={<Customers />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
