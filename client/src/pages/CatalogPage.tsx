import { useEffect } from 'react';
import { Box, Container, Grid2 } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProductsByQuery } from '../redux/products/operations';
import {
  selectFilterOptions,
  selectFilterValues,
} from '../redux/filters/selectors';
import { fetchShopsForFilter } from '../redux/filters/operations';
import { selectProducts } from '../redux/products/selectors';
import { setFilterValues } from '../redux/filters/slice';
import { FilterValues } from '../types/filters';
import ShopList from '../components/ShopList';
import ProductList from '../components/ProductList';
import Message from '../components/common/Message';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const { shops } = useAppSelector(selectFilterOptions);
  const filterValues = useAppSelector(selectFilterValues);
  const hasNoProducts = products.length === 0;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(fetchProductsByQuery(filterValues));
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, [dispatch, filterValues]);

  useEffect(() => {
    const setDefaultShop = async () => {
      try {
        if (shops.length > 0 && !filterValues.shopId) {
          await dispatch(setFilterValues({ shopId: shops[0]._id }));
        }
      } catch (err) {
        console.error('Failed to set default shop filter:', err);
      }
    };

    setDefaultShop();
  }, [dispatch, filterValues.shopId, shops]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        await dispatch(fetchShopsForFilter());
      } catch (err) {
        console.error('Failed to fetch shops for filter:', err);
      }
    };

    fetchShops();
  }, [dispatch]);

  const handleFilter = (value: Partial<FilterValues>) => {
    dispatch(setFilterValues(value));
  };

  return (
    <Box
      component="section"
      my={6}
      sx={{
        width: '100%',
        px: 8,
        maxWidth: { xl: 1440 }, // для больших экранов
      }}
    >
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={3}>
            <ShopList
              shops={shops}
              selectedShopId={filterValues.shopId}
              onChange={handleFilter}
            />
          </Grid2>
          <Grid2 size={9} height="79vh" overflow="auto" paddingInline={2}>
            {hasNoProducts ? (
              <Message
                color="warning"
                message="No products found in this shop. Try another store or adjust your filters."
              />
            ) : (
              <ProductList products={products} />
            )}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default CatalogPage;
