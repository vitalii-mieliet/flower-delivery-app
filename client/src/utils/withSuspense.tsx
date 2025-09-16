import { Suspense, ComponentType, FC } from 'react';
import { LinearProgress } from '@mui/material';
const withSuspense = <P extends object>(Component: ComponentType<P>): FC<P> => {
  const WrappedWithSuspense: FC<P> = (props) => {
    return (
      <Suspense fallback={<LinearProgress />}>
        <Component {...props} />
      </Suspense>
    );
  };

  WrappedWithSuspense.displayName = `withSuspense(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedWithSuspense;
};

export default withSuspense;
