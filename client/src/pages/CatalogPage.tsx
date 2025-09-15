import { useEffect } from 'react';
import { Box, Container, Grid2 } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProductsByQuery } from '../redux/products/operations';
import {
  selectFilterOptions,
  selectFilterValues,
} from '../redux/filters/selectors';
import { fetchShopsForFilter } from '../redux/filters/operations';
import ShopList from '../components/ShopList';
import ProductList from '../components/ProductList';
import { selectProducts } from '../redux/products/selectors';
import { setFilterValues } from '../redux/filters/slice';
import { FilterValues } from '../types/filters';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const { shops } = useAppSelector(selectFilterOptions);
  const filterValues = useAppSelector(selectFilterValues);

  useEffect(() => {
    dispatch(fetchProductsByQuery(filterValues));
  }, [dispatch, filterValues]);

  useEffect(() => {
    if (shops.length > 0 && !filterValues.shopId)
      dispatch(setFilterValues({ shopId: shops[0]._id }));
  });

  useEffect(() => {
    dispatch(fetchShopsForFilter());
  }, [dispatch]);

  const handleFilter = (value: Partial<FilterValues>) => {
    dispatch(setFilterValues(value));
  };

  return (
    <Box component="section" my={6}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={3}>
            <ShopList
              shops={shops}
              selectedShopId={filterValues.shopId}
              onChange={handleFilter}
            />
          </Grid2>
          <Grid2 size={9}>
            <ProductList products={products} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default CatalogPage;
