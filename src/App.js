import * as React from 'react';
import { Router } from '@reach/router';

import { createLazyRoute } from './utils/router';

import HomeSection from './Sections/Home';

const ContextSection = createLazyRoute(
  React.lazy(() => import('./Sections/Context'))
);

function App() {
  return (
    <div className="App">
      <Router>
        <HomeSection path="/" />
        <ContextSection path="context" />
      </Router>
    </div>
  );
}

export default App;
