import * as React from 'react';

export function createLazyRoute(RouteComponent, { fallback = null } = {}) {
  return function LazyRouter(props) {
    return (
      <React.Suspense fallback={fallback}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}
