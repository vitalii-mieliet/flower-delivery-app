import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayuot from './components/layouts/SharedLayuot';
import withSuspense from './utils/withSuspense';

const HomePage = withSuspense(lazy(() => import('./pages/HomePage')));
const CatalogPage = withSuspense(lazy(() => import('./pages/CatalogPage')));
const CartPage = withSuspense(lazy(() => import('./pages/CartPage')));
const NotFoundPage = withSuspense(lazy(() => import('./pages/NotFoundPage')));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<CatalogPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
