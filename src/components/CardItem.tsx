import { useNavigate } from 'react-router-dom';
import LikeIcon from '../assets/icons/LikeIcon';
import { ICard } from '../types/types';
import { useState } from 'react';

const CardItem = ({ id, avatar, first_name, last_name }: ICard) => {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setLike(!like);
    };

    return (
        <div
            className="relative w-[305px] h-[263px] flex flex-col gap-4 items-center justify-center rounded-[10px] text-xl shadow-md cursor-pointer hover:border hover:border-black"
            onClick={() => navigate(`/card/${id}`)}
        >
            <img
                className="w-[124px] h-[124px] rounded-full object-cover"
                src={avatar}
                alt="avatar"
            />
            <h2>
                {first_name} {last_name}
            </h2>
            <button
                className="absolute p-2 right-5 bottom-5 bg-[#F8F8F8]"
                onClick={(e) => handleClick(e)}
            >
                <LikeIcon fill={like ? '#512689' : 'none'} />
            </button>
        </div>
    );
};

export default CardItem;
