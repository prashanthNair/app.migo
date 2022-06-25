import { Container, Grid } from '@mui/material';
import CategorySectionHeader from 'components/CategorySectionHeader';
import ProductCard from 'components/product-cards/ProductCard';

const MoreItems = ({ moreItems }) => {
  return (
    <Container
      sx={{
        mb: '70px',
      }}
    >
      <CategorySectionHeader title='More For You' seeMoreLink='#' />

      <Grid container spacing={3}>
        {moreItems.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard off={25} hoverEffect {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoreItems;
