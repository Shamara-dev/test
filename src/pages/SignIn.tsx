import { useState } from 'react';
import { loginUser } from '../utils/api';
import ShowPass from '../assets/icons/ShowPass';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/slices/authSlice';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [isPassVisible, setIsPassVisible] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleShowPass = () => {
        setIsPassVisible(!isPassVisible);
    };

    const handleFieldValidation = (
        field: string,
        value: boolean,
        error: string
    ) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: value ? error : '',
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleFieldValidation(
            'email',
            !email.match(
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
            ),
            'Введите корректный email'
        );
        handleFieldValidation(
            'password',
            password.length < 6,
            'Не менее 6 символов'
        );

        if (Object.values(errors).every((error) => error === '')) {
            loginUser(email, password).then((res) => {
                dispatch(login(res.token));
                localStorage.setItem('token', res.token);
                navigate('/');
            });
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form
                className="w-[500px] p-4 flex flex-col gap-4 rounded-2xl shadow-md"
                onSubmit={handleSubmit}
                noValidate
            >
                <h2 className="text-xl">Войти</h2>
                <label className="flex flex-col gap-2" htmlFor="email">
                    <span>Электронная почта</span>
                    <input
                        className={`p-4 rounded-lg text-[#808185] bg-[#F8F8F8] ${
                            errors.email.length !== 0 &&
                            'border border-[#FF6161]'
                        }`}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && (
                        <p className="text-[10px] text-[#FF6161]">
                            {errors.email}
                        </p>
                    )}
                </label>
                <label
                    className="relative flex flex-col gap-2"
                    htmlFor="password"
                >
                    <span>Пароль</span>
                    <input
                        className={`p-4 rounded-lg text-[#808185] bg-[#F8F8F8] ${
                            errors.password.length !== 0 &&
                            'border border-[#FF6161]'
                        }`}
                        type={isPassVisible ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="absolute right-2 top-12"
                        type="button"
                        onClick={handleShowPass}
                    >
                        <ShowPass
                            stroke={isPassVisible ? '#512689' : '#808185'}
                        />
                    </button>
                    {errors.password && (
                        <p className="text-[10px] text-[#FF6161]">
                            {errors.password}
                        </p>
                    )}
                </label>
                <button
                    className="mt-2 py-3 text-center rounded-lg text-white bg-[#512689]"
                    type="submit"
                >
                    Войти
                </button>
                <p className="text-sm">
                    Нет аккаунта?
                    <Link to="/sign-up" className="ml-1 text-[#512689]">
                        Зарегистрироваться
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
