/* eslint-disable react/prop-types */
import React from 'react';

const GlobalContext = React.createContext();

function GlobalContextWrapper({ children, ...rest }) {
  const [globalState, setGlobalState] = React.useState({
    token: '',
  });

  React.useEffect(() => {
    if (rest) {
      setGlobalState((prv) => ({
        ...prv,
        token: rest?.token,
      }));
    }
  }, [rest?.token])

  const contextValue = React.useMemo(() => ({ globalState, setGlobalState }), [
    globalState,
    setGlobalState,
  ]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextWrapper, GlobalContext };
