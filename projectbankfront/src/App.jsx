import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import PrivateRoute from './PrivateRoute';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
    return (
        <> <Header/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profil" element={
                    <PrivateRoute>
                        <Profil />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    );
}
