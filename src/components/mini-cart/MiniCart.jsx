/* eslint-disable react-hooks/exhaustive-deps */
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MigobucksAvatar from 'components/MigobucksAvatar';
import MigobucksButton from 'components/MigobucksButton';
import MigobucksIconButton from 'components/MigobucksIconButton';
import { FlexBox } from 'components/flex-box';
import ShoppingBagOutlined from 'components/icons/ShoppingBagOutlined';
import LazyImage from 'components/LazyImage';
import { H5, Tiny } from 'components/Typography';
import { useAppContext } from 'contexts/AppContext';
import Link from 'next/link';
import React, { useCallback } from 'react';

const MiniCart = ({ toggleSidenav }) => {
  const { palette } = useTheme();
  const { state, dispatch } = useAppContext();
  const cartList = state.cart;
  const handleCartAmountChange = useCallback(
    (amount, product) => () => {
      dispatch({
        type: 'CHANGE_CART_AMOUNT',
        payload: { ...product, qty: amount },
      });
    },
    []
  );

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  };

  return (
    <Box width='380px'>
      <Box
        overflow='auto'
        height={`calc(100vh - ${!!cartList.length ? '80px - 3.25rem' : '0px'})`}
      >
        <FlexBox
          alignItems='center'
          m='0px 20px'
          height='74px'
          color='secondary.main'
        >
          <ShoppingBagOutlined color='inherit' />
          <Box fontWeight={600} fontSize='16px' ml={1}>
            {cartList.length} item
          </Box>
        </FlexBox>

        <Divider />

        {!!!cartList.length && (
          <FlexBox
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            height='calc(100% - 74px)'
          >
            <LazyImage
              src='/assets/images/logos/shopping-bag.svg'
              width={90}
              height={100}
            />
            <Box
              component='p'
              mt={2}
              color='grey.600'
              textAlign='center'
              maxWidth='200px'
            >
              Your shopping bag is empty. Start shopping
            </Box>
          </FlexBox>
        )}
        {cartList.map((item) => (
          <FlexBox
            alignItems='center'
            py={2}
            px={2.5}
            borderBottom={`1px solid ${palette.divider}`}
            key={item.id}
          >
            <FlexBox alignItems='center' flexDirection='column'>
              <MigobucksButton
                variant='outlined'
                color='primary'
                sx={{
                  height: '32px',
                  width: '32px',
                  borderRadius: '300px',
                }}
                onClick={handleCartAmountChange(item.qty + 1, item)}
              >
                <Add fontSize='small' />
              </MigobucksButton>
              <Box fontWeight={600} fontSize='15px' my='3px'>
                {item.qty}
              </Box>
              <MigobucksButton
                variant='outlined'
                color='primary'
                sx={{
                  height: '32px',
                  width: '32px',
                  borderRadius: '300px',
                }}
                onClick={handleCartAmountChange(item.qty - 1, item)}
                disabled={item.qty === 1}
              >
                <Remove fontSize='small' />
              </MigobucksButton>
            </FlexBox>

            <Link href={`/product/${item.id}`}>
              <a>
                <MigobucksAvatar
                  src={item.imgUrl || '/assets/images/products/iphone-x.png'}
                  mx={2}
                  alt={item.name}
                  height={76}
                  width={76}
                />
              </a>
            </Link>

            <Box flex='1 1 0'>
              <Link href={`/product/${item.id}`}>
                <a>
                  <H5 className='title' fontSize='14px'>
                    {item.name}
                  </H5>
                </a>
              </Link>
              <Tiny color='grey.600'>
                ${item.price.toFixed(2)} x {item.qty}
              </Tiny>
              <Box
                fontWeight={600}
                fontSize='14px'
                color='primary.main'
                mt={0.5}
              >
                ${(item.qty * item.price).toFixed(2)}
              </Box>
            </Box>

            <MigobucksIconButton
              ml={2.5}
              size='small'
              onClick={handleCartAmountChange(0, item)}
            >
              <Close fontSize='small' />
            </MigobucksIconButton>
          </FlexBox>
        ))}
      </Box>

      {!!cartList.length && (
        <Box p={2.5}>
          <Link href='/checkout-alternative' passHref>
            <MigobucksButton
              variant='contained'
              color='primary'
              sx={{
                mb: '0.75rem',
                height: '40px',
              }}
              fullWidth
              onClick={toggleSidenav}
            >
              Checkout Now (${getTotalPrice().toFixed(2)})
            </MigobucksButton>
          </Link>
          <Link href='/cart' passHref>
            <MigobucksButton
              color='primary'
              variant='outlined'
              sx={{
                height: 40,
              }}
              fullWidth
              onClick={toggleSidenav}
            >
              View Cart
            </MigobucksButton>
          </Link>
        </Box>
      )}
    </Box>
  );
};

MiniCart.defaultProps = {
  toggleSidenav: () => {},
};
export default MiniCart;
