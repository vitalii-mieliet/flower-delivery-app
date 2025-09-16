import { useRef } from 'react';
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import {
  selectCartItems,
  selectCartTotal,
  selectItemsForOrder,
  selectUserData,
} from '../redux/cart/selectors';
import api from '../service/api';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { cartActions } from '../redux/cart/slice';
import OrderForm, { OrderFormHandle } from '../components/OrderForm';
import CartList from '../components/CartList';
import Message from '../components/common/Message';
import { UserData } from '../types/users';
import { formatPrice } from '../utils/formatPrice';
import { toast } from 'react-toastify';

const CartPage = () => {
  const items = useAppSelector(selectCartItems);
  const orderItems = useAppSelector(selectItemsForOrder);
  const totalPrice = useAppSelector(selectCartTotal);
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const isCartEmpty = items.length === 0;
  const formRef = useRef<OrderFormHandle>(null);

  const handleCreateOrder = async (values: UserData) => {
    try {
      if (!items || items.length === 0) {
        console.info(
          'Your cart is empty. Please add products before placing an order.',
        );
        return;
      }

      const payload = {
        userData: values,
        items: orderItems,
      };

      await api.post('/orders', payload);
      toast.success('Your order has been successfully placed!');
    } catch {
      toast.error('Failed to create order');
    }
  };

  const handleFormChange = (value: Partial<UserData>) => {
    dispatch(cartActions.addUserData(value));
  };

  return (
    <Box component="section" my={6}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={4}>
            <OrderForm
              ref={formRef}
              values={userData}
              onChange={handleFormChange}
              onSubmit={handleCreateOrder}
            />
          </Grid2>

          <Grid2 size={8}>
            {isCartEmpty ? (
              <Message message="Your cart is currently empty. Pick a flower or bouquet to b egin!" />
            ) : (
              <CartList items={items} />
            )}
            <Box
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              gap={8}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Typography fontSize={24} fontWeight={600}>
                  Total price:{' '}
                </Typography>
                <Box display="flex" alignItems="end" gap={0.5}>
                  <Typography fontSize={24} fontWeight={600}>
                    {formatPrice(totalPrice)}
                  </Typography>
                  <Typography fontSize={20} fontWeight={600}>
                    USD
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                onClick={() => formRef.current?.submit()}
              >
                Create Order
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default CartPage;
