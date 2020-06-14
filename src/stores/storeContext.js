import React from 'react';
import rootStore from "./rootStore";

const storeContext = React.createContext(rootStore);

export const StoreProvider = storeContext.Provider;

export default storeContext;