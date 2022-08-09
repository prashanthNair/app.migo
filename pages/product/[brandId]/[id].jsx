import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavbarLayout from '../../../src/components/layouts/NavbarLayout';
import AdditionalInfo from '../../../src/components/products/AdditionalInfo';
import FrequentlyBought from '../../../src/components/products/FrequentlyBought';
import ProductDescription from '../../../src/components/products/ProductDescription';
import ProductIntro from '../../../src/components/products/ProductIntro';
import ProductReview from '../../../src/components/products/ProductReview';
import RelatedProducts from '../../../src/components/products/RelatedProducts';
import {
  getFrequentlyBought,
  getRelatedProducts,
} from '../../../src/utils/api/static-data-helper';
import { getProductDetails } from '../../api/products/[brandId]/[id]/index';
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    minHeight: 40,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
})); // ===============================================================

// ===============================================================
const ProductDetails = (props) => {
  debugger;
  const router = useRouter();
  const { frequentlyBought, relatedProducts, details } = props;
  // const { id, brandId } = router.query;
  // const [details, setDetails] = useState(null);
  // const [frequentlyBought, setFrequentlyBought] = useState(null);
  // const [relatedProducts, setRelatedProducts] = useState(null);

  // useEffect(async () => {
  //   const data = await getProductDetails(id, brandId);
  //   const frequentlyBought = await getFrequentlyBought();
  //   const relatedProducts = await getRelatedProducts();

  //   setDetails(data);
  //   setFrequentlyBought(frequentlyBought);
  //   setRelatedProducts(relatedProducts);
  // }, [id, brandId]);

  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_, newValue) => {
    setSelectedOption(newValue);
  };

  if (!details) return <></>;
  return (
    <NavbarLayout>
      <ProductIntro product={details} />
      <StyledTabs
        textColor='primary'
        value={selectedOption}
        indicatorColor='primary'
        onChange={handleOptionClick}
      >
        <Tab className='inner-tab' label='Description' />
        <Tab
          className='inner-tab'
          label={`Reviews ( ${details?.Reviews?.length} )`}
        />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription data={details} />}
        {selectedOption === 1 && <ProductReview data={details} />}
      </Box>
      <AdditionalInfo data={details}></AdditionalInfo>
      <FrequentlyBought productsData={frequentlyBought} />
      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  debugger;
  const productId = context.params.id;
  const brandId = context.params.brandId;
  const data = await getProductDetails(productId, brandId);
  const frequentlyBought = await getFrequentlyBought();
  const relatedProducts = await getRelatedProducts();

  return {
    props: {
      frequentlyBought,
      relatedProducts,
      details: data || null,
    },
  };
}
export default ProductDetails;
