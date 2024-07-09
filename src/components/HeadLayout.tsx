import { ReactNode } from 'react';
import ExitIcon from '../assets/icons/ExitIcon';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

const HeadLayout = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    };

    return (
        <div className="w-full min-h-[265px] flex bg-[#512689]">
            <div className="relative max-w-[1440px] w-full mx-auto p-5 flex items-center justify-center text-white">
                {children}
                <ExitIcon
                    className="block sm:hidden absolute right-[27px] top-[23px]"
                    onClick={handleLogout}
                />
                <button
                    className="hidden sm:block absolute right-[80px] top-[32px] px-4 py-2 rounded-lg border border-[#F8F8F8]"
                    onClick={handleLogout}
                >
                    Выход
                </button>
            </div>
        </div>
    );
};

export default HeadLayout;
