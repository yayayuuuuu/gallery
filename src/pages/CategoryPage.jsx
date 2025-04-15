import { useParams } from 'react-router-dom';
import categoryData from '../json/category.json';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PeopleCarousel from '../components/PeopleCarousel';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { id } = useParams(); // id = c1 / c2 / c3...
  const category = categoryData.find(item => item.id === id);

  if (!category) return <div className="text-center py-10">找不到類別</div>;

  return (
    <div className="w-full mx-auto bg-base-100">
      <Header />
      <Banner data={category} />
      <PeopleCarousel id={id} />

      
      <GallerySection categoryId={id} />

      <Footer />
    </div>
  );
};

export default CategoryPage;




