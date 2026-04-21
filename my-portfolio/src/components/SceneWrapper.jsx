import React, { lazy, Suspense, useState, useEffect } from "react";

// Lazy-load the entire 3D scene so it doesn't block initial render
const LazyScene = lazy(() => import("./canvas/Scene"));

const Scene = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Skip 3D scene on mobile — saves 1MB+ JS and GPU strain
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    // On desktop, defer loading until after the main content has painted
    const timer = requestIdleCallback
      ? requestIdleCallback(() => setShouldRender(true))
      : setTimeout(() => setShouldRender(true), 100);

    return () => {
      if (requestIdleCallback) {
        cancelIdleCallback(timer);
      } else {
        clearTimeout(timer);
      }
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <Suspense fallback={null}>
      <LazyScene />
    </Suspense>
  );
};

export default Scene;
