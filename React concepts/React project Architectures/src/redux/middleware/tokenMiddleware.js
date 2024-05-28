const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type.startsWith('shorexApi/')) {
    const state = store.getState();
    const token = state?.global?.data?.token;

    if (token) {
      action.meta.baseQuery.defaultHeaders = {
        ...action.meta.baseQuery.defaultHeaders,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return next(action);
};

export { tokenMiddleware }
