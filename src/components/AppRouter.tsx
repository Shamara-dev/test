import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CardPage from '../pages/CardPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { useAppSelector } from '../store/hooks';

const AppRouter = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    return (
        <Routes>
            <Route element={isAuth ? <Outlet /> : <Navigate to="sign-in" />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/card/:id" element={<CardPage />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
};

export default AppRouter;
