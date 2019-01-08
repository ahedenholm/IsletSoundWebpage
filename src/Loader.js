import React, { Suspense} from 'react';
const App = React.lazy(() => import('./App'));

export default function Loader() {
  return (
    <div>
      <Suspense fallback={<div className="displayFlex flexFullscreen flexCenter">Loading...</div>}>
        <App />
      </Suspense>
    </div>
  );
}