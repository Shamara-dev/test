import { useNavigate } from 'react-router-dom';
import { ICard } from '../types/types';
import ArrowLeft from '../assets/icons/ArrowLeft';

const HeadCard = ({ avatar, first_name, last_name }: ICard) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-[1000px] w-full mx-auto md:mx-0 my-16 flex gap-4 sm:gap-8 flex-wrap-reverse items-center justify-center xl:justify-start">
            <img
                className="w-[187px] h-[187px] rounded-full object-cover"
                src={avatar}
                alt="avatar"
            />
            <div className="flex flex-col gap-4 items-center sm:items-start justify-center">
                <h1 className="text-[36px] md:text-[64px]">
                    {first_name} {last_name}
                </h1>
                <p className="text-[20px] md:text-[32px]">Партнер</p>
            </div>

            <ArrowLeft
                className="block sm:hidden absolute left-[33px] top-[25px]"
                onClick={handleClick}
            />
            <button
                className="hidden sm:block absolute left-[80px] top-[32px] px-4 py-2 rounded-lg border border-[#F8F8F8]"
                onClick={handleClick}
            >
                Назад
            </button>
        </div>
    );
};

export default HeadCard;
