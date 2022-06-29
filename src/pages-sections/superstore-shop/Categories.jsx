import { Box, Container, Grid, styled } from '@mui/material';
import MigobucksCard from 'components/MigobucksCard';
import CategorySectionHeader from 'components/CategorySectionHeader';
import Category from 'components/icons/Category';
import LazyImage from 'components/LazyImage';
import Link from 'next/link';
import React from 'react';
const StyledMigobucksCard = styled(MigobucksCard)(({ theme }) => ({
  display: 'flex',
  borderRadius: 8,
  padding: '0.75rem',
  alignItems: 'center',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const Categories = ({ categories }) => {
  return (
    <Container
      sx={{
        mb: '70px',
      }}
    >
      <CategorySectionHeader
        seeMoreLink='#'
        title='Categories'
        icon={<Category color='primary' />}
      />

      <Grid container spacing={3}>
        {categories.map((item, ind) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={ind}>
            <Link href='/'>
              <a>
                <StyledMigobucksCard elevation={1}>
                  <LazyImage
                    width={52}
                    height={52}
                    alt='fashion'
                    src={item.ImageUrl}
                    objectFit='contain'
                    borderRadius='8px'
                  />
                  <Box fontWeight='600' ml={1.25}>
                    {item.Name}
                  </Box>
                </StyledMigobucksCard>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
