"use client"

import { apiSlice } from "@/features/api/apiSlice";
import {Provider} from "react-redux";
import {store} from "@/lib/store";


const ReduxProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;