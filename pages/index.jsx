import AppLayout from '../src/components/layouts/AppLayout';
import MainCarousel from '../src/components/product-listing/MainCarousel';
import Categories from '../src/components/product-listing/Categories';
import MoreItems from '../src/components/product-listing/MoreItems';
import ShoppingOptions from '../src/components/product-listing/ShoppingOptions';
import BigDiscount from '../src/components/product-listing/BigDiscount';
import FlashDeals from '../src/components/product-listing/FlashDeals';
import TopCategory from '../src/components/product-listing/TopCategory';
import TopRated from '../src/components/product-listing/TopRated';
import NewArrivals from '../src/components/product-listing/NewArrivals';
import FlashPromo from '../src/components/product-listing/FlashPromo';
import {
  getTopRatedProduct,
  getTopRatedBrand,
  getServiceList,
  getCategories,
  getTopCategories,
} from '../src/utils/api/static-data-helper';
import { getProducts } from './api/products/index';
const IndexPage = (props) => {
  const {
    moreItems,
    serviceList,
    topCategories,
    flashDealsData,
    topRatedBrands,
    newArrivalsList,
    bigDiscountList,
    mainCarouselData,
    topRatedProducts,
    bottomCategories,
  } = props;
  return (
    <AppLayout>
      <MainCarousel carouselData={mainCarouselData} />
      <FlashDeals flashDeals={flashDealsData} />
      <TopCategory categoryList={topCategories} />
      <TopRated
        topRatedList={topRatedProducts || []}
        topRatedBrands={topRatedBrands || []}
      />
      <NewArrivals newArrivalsList={newArrivalsList} />
      <BigDiscount bigDiscountList={bigDiscountList} />
      <Categories categories={bottomCategories} />
      <FlashPromo />
      <MoreItems moreItems={moreItems} />
      <ShoppingOptions serviceList={serviceList} />
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const data = await getProducts();
  const serviceList = await getServiceList();
  const bottomCategories = await getCategories();
  const topCategories = await getTopCategories();
  const topRatedBrands = await getTopRatedBrand();
  const topRatedProducts = await getTopRatedProduct();
  return {
    props: {
      moreItems: data?.Products || [],
      serviceList,
      topCategories: topCategories || [],
      flashDealsData: data?.FlashDeals || [],
      topRatedBrands: topRatedBrands || [],
      newArrivalsList: data?.NewArrivals?.slice(0, 6) || [],
      bigDiscountList: data?.BigDiscount || [],
      mainCarouselData: data?.CarouselData || [],
      topRatedProducts: topRatedProducts,
      bottomCategories,
    },
  };
}
export default IndexPage;
