import { useParams } from 'react-router-dom';
import categoryData from '../json/category.json';
import Header from '../components/Header';
import PeopleCarousel from '../components/PeopleCarousel';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { id } = useParams();
  const category = categoryData.find(item => item.id === id);

  if (!category) return <div className="text-center py-10">找不到類別</div>;

  return (
    <div className="w-full max-w-[1366px] mx-auto bg-base-100">
      <Header />
      <Banner data={category} />

      <PeopleCarousel id={id} />

      <Footer />
    </div>
  );
};

export default CategoryPage;



