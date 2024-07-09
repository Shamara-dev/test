import { useEffect, useState } from 'react';
import { ICard } from '../types/types';
import { getCards } from '../utils/api';
import CardItem from './CardItem';
import ArrowDown from '../assets/icons/ArrowDown';

const CardList = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [displayCount, setDisplayCount] = useState(isMobile ? 4 : 8);

    useEffect(() => {
        getCards().then((res) => {
            setCards(res.data);
        });

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setDisplayCount(isMobile ? 4 : 8);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const handleShowMore = () => {
        setDisplayCount((prev) => prev + 4);
    };

    return (
        <div className=" w-full mx-auto my-8 sm:my-12 p-8 sm:p-0 flex flex-col gap-14 items-center justify-center">
            <div className="flex flex-wrap justify-center gap-5">
                {cards.slice(0, displayCount).map((card) => (
                    <CardItem key={card.id} {...card} />
                ))}
            </div>
            <button
                className={`mb-12 px-4 py-2 flex gap-3 text-base border border-black rounded-lg ${
                    displayCount < cards.length ? '' : 'hidden'
                }`}
                onClick={handleShowMore}
            >
                Показать еще <ArrowDown />
            </button>
        </div>
    );
};

export default CardList;
