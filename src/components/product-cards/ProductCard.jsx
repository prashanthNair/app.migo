/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Favorite, Remove } from '@mui/icons-material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Box, Button, Chip, IconButton, styled } from '@mui/material';
import MigobucksCard from 'components/MigobucksCard';
import MigobucksRating from 'components/MigobucksRating';
import LazyImage from 'components/LazyImage';
import { H3, Span } from 'components/Typography';
import { useAppContext } from 'contexts/AppContext';
import Link from 'next/link';
import React, { Fragment, useCallback, useState } from 'react';
import { FlexBox } from '../flex-box';
const StyledMigobucksCard = styled(MigobucksCard)(() => ({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 250ms ease-in-out',
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 1,
  top: '10px',
  left: '10px',
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: '10px',
  position: 'absolute',
}));
const LoveIconWrapper = styled(Box)(() => ({
  zIndex: 2,
  top: '7px',
  right: '15px',
  cursor: 'pointer',
  position: 'absolute',
}));
const ContentWrapper = styled(Box)(() => ({
  padding: '1rem',
  '& .Tittle, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})); // ========================================================

// ========================================================
const ProductCard = ({
  ImageUrl,
  ProductId,
  Tittle,
  SellingPrice,
  Rating = 5,
  hideRating,
  hoverEffect,
  DiscountPercentage = 5,
  showProductSize,
}) => {
  const { state, dispatch } = useAppContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const cartItem = state.cart.find((item) => item.id === ProductId);
  debugger;
  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: 'CHANGE_CART_AMOUNT',
        payload: {
          name: Tittle,
          qty: amount,
          SellingPrice,
          ImageUrl,
          ProductId,
        },
      });
    },
    []
  );
  return (
    <StyledMigobucksCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {!!DiscountPercentage && (
          <StyledChip
            color='primary'
            size='small'
            label={`${DiscountPercentage}% off`}
          />
        )}

        <LoveIconWrapper>
          <IconButton
            sx={{
              p: '6px',
            }}
            onClick={toggleIsFavorite}
          >
            {isFavorite ? (
              <Favorite color='primary' fontSize='small' />
            ) : (
              <FavoriteBorder fontSize='small' />
            )}
          </IconButton>
        </LoveIconWrapper>

        <Link href={`/product/${ProductId}`}>
          <a>
            {/* <LazyImage
              src={ImageUrl || ''}
              width={5}
              paddingTop={10}
              height={7}
              layout='responsive'
              alt={Tittle}
            /> */}
          </a>
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex='1 1 0' minWidth='0px' mr={1}>
            <Link href={`/product/${ProductId}`}>
              <a>
                <H3
                  mb={1}
                  Tittle={Tittle}
                  fontSize='14px'
                  fontWeight='600'
                  className='Tittle'
                  color='text.secondary'
                >
                  {Tittle}
                </H3>
              </a>
            </Link>

            {!hideRating && (
              <MigobucksRating value={Rating || 0} color='warn' readOnly />
            )}

            {showProductSize && (
              <Span color='grey.600' mb={1} display='block'>
                300ml
              </Span>
            )}

            <FlexBox alignItems='center' gap={1} mt={0.5}>
              <Box fontWeight='600' color='primary.main'>
                ${SellingPrice?.toFixed(2)}
              </Box>

              {!!DiscountPercentage && (
                <Box color='grey.600' fontWeight='600'>
                  <del>{DiscountPercentage?.toFixed(2)}</del>
                </Box>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width='30px'
            alignItems='center'
            className='add-cart'
            flexDirection='column-reverse'
            justifyContent={!!cartItem?.qty ? 'space-between' : 'flex-start'}
          >
            <Button
              color='primary'
              variant='outlined'
              sx={{
                padding: '3px',
              }}
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Add fontSize='small' />
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <Box color='text.primary' fontWeight='600'>
                  {cartItem?.qty}
                </Box>
                <Button
                  color='primary'
                  variant='outlined'
                  sx={{
                    padding: '3px',
                  }}
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Remove fontSize='small' />
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledMigobucksCard>
  );
};

export default ProductCard;
