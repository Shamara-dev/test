import CardList from '../components/CardList';
import HeadLayout from '../components/HeadLayout';
import HeadMain from '../components/HeadMain';

const MainPage = () => {
    return (
        <div>
            <HeadLayout>
                <HeadMain />
            </HeadLayout>
            <CardList />
        </div>
    );
};

export default MainPage;
