'use client';

import { AppStore, makeStore, persistor } from '@/store/store';
import Lottie from 'lottie-react';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import loadingAnimation  from "../../public/progress.json"

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Lottie 
          loop
          animationData={loadingAnimation}
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }

  return (
    <Provider store={storeRef.current}>
      {/* PersistGate ensures the app waits for rehydrated state */}
      {children}
    </Provider>
  );
};

export default StoreProvider;
