'use client';

import { AppStore, makeStore, persistor } from '@/store/store';
import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {/* PersistGate ensures the app waits for rehydrated state */}
      {children}
    </Provider>
  );
};

export default StoreProvider;
