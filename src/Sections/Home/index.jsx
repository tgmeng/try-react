import * as React from 'react';

import { Link } from '@reach/router';

export default function Home() {
  return (
    <nav>
      <Link to="context">Context</Link>
    </nav>
  );
}
