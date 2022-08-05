import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { H2 } from '../../src/components/Typography';
import NavbarLayout from '../../src/components/layouts/NavbarLayout';
import FrequentlyBought from '../../src/components/products/FrequentlyBought';
import ProductDescription from '../../src/components/products/ProductDescription';
import ProductReview from '../../src/components/products/ProductReview';
import RelatedProducts from '../../src/components/products/RelatedProducts';
import ProductIntro from '../../src/components/products/ProductIntro';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { getProductDetails } from '../../src/utils/api/products';
import AdditionalInfo from '../../src/components/products/AdditionalInfo';
import {
  getFrequentlyBought,
  getRelatedProducts,
} from '../../src/utils/api/static-data-helper';
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
  const { frequentlyBought, relatedProducts, data } = props;
  // const router = useRouter();
  // const frequentlyBought = getFrequentlyBought();
  // const relatedProducts = getRelatedProducts();
  // const { id } = router.query;
  // const { data, error } = useSWR(id, getProductDetails);
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (_, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <NavbarLayout>
      <ProductIntro product={data} />
      <StyledTabs
        textColor='primary'
        value={selectedOption}
        indicatorColor='primary'
        onChange={handleOptionClick}
      >
        <Tab className='inner-tab' label='Description' />
        <Tab
          className='inner-tab'
          label={`Reviews (${data?.Reviews?.length})`}
        />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription data={data} />}
        {selectedOption === 1 && <ProductReview data={data} />}
      </Box>
      <AdditionalInfo data={data}></AdditionalInfo>
      <FrequentlyBought productsData={frequentlyBought} />
      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
export async function getStaticProps(context) {
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
      data: data || null,
    },
  };
}
export default ProductDetails;
