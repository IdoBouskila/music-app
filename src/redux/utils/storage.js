import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const isServer = typeof window !== "undefined";

// If running on the server-side (RSC)
// fallback to a "noop storage" to prevent errors when creating synchronous storage
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = isServer ? createWebStorage("local") : createNoopStorage();

export default storage;
