import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../utils/api';
import { ICard } from '../types/types';
import HeadLayout from '../components/HeadLayout';
import HeadCard from '../components/HeadCard';
import PhoneIcon from '../assets/icons/PhoneIcon';
import EmailIcon from '../assets/icons/EmailIcon';

const CardPage = () => {
    const { id } = useParams<{ id: string }>();
    const [card, setCard] = useState<Partial<ICard>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUser(id!);
                setCard(userData.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <>
            <HeadLayout>
                <HeadCard {...(card as ICard)} />
            </HeadLayout>
            <div className="max-w-[1000px] mx-auto lg:mt-12 px-4 md:px-6 py-8 flex gap-8 flex-wrap-reverse justify-between">
                <div className="max-w-[630px] w-full flex flex-col gap-[30px]">
                    <p>
                        Клиенты видят в нем эксперта по вопросам разработки
                        комплексных решений финансовых продуктов, включая такие
                        аспекты, как организационная структура, процессы,
                        аналитика и ИТ-компоненты. Он помогает клиентам лучше
                        понимать структуру рисков их бизнеса, улучшать процессы
                        за счет применения новейших технологий и увеличивать
                        продажи, используя самые современные аналитические
                        инструменты.
                    </p>
                    <p>
                        В работе с клиентами недостаточно просто решить
                        конкретную проблему или помочь справиться с трудностями.
                        Не менее важно уделять внимание обмену знаниями: "Один
                        из самых позитивных моментов — это осознание того, что
                        ты помог клиенту перейти на совершенно новый уровень
                        компетентности, уверенность в том, что после окончания
                        проекта у клиента есть все необходимое, чтобы дальше
                        развиваться самостоятельно".
                    </p>
                    <p>
                        Помимо разнообразных проектов для клиентов финансового
                        сектора, Сорин ведет активную предпринимательскую
                        деятельность. Он является совладельцем сети клиник
                        эстетической медицины в Швейцарии, предлагающей
                        инновационный подход к красоте, а также инвестором
                        других бизнес-проектов.
                    </p>
                </div>
                <div className="min-w-[200px] flex flex-col gap-6">
                    <a
                        href="tel:+79543334455"
                        className="flex gap-[10px] items-center"
                    >
                        <PhoneIcon />
                        <span>+7 (954) 333-44-55</span>
                    </a>

                    <a
                        href={`mailto:${card.email}`}
                        className="flex gap-[10px] items-center"
                    >
                        <EmailIcon />
                        <span>{card.email}</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardPage;
