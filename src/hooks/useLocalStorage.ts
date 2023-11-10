import { useState, useEffect } from "react";

// These hooks are used to get and set values in the local and session storage
const getLocalValue = (key: string, initValue: any) => {
  // In case of Server-side (Next.js)
  if (typeof window === "undefined") return initValue;

  // if a value is already store
  const val = localStorage.getItem(key);
  if (val) return JSON.parse(val);

  // return result of a function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

const getSessionValue = (key: string, initValue: any) => {
  // In case of SSR (Next.js)
  if (typeof window === "undefined") return initValue;

  // if a value is already store

  const sessionValue = sessionStorage.getItem(key);
  if (sessionValue) return JSON.parse(sessionValue);

  // return result of a function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

export const useLocalStorage = (key: string, initValue: any) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useSessionStorage = (key: string, initValue: any) => {
  const [value, setValue] = useState(() => {
    return getSessionValue(key, initValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
