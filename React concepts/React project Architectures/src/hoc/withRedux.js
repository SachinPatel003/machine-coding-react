import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { setDataAction } from '../redux/common/global-data';

const withRedux = (WrappedComponent) => {
  const MemoizedComponent = React.memo(WrappedComponent);

  const HOC = (props) => {
    React.useLayoutEffect(() => {
      store.dispatch(setDataAction(props));
    }, [])

    return (
      <Provider store={store}>
        <MemoizedComponent {...props} />
      </Provider>
    );
  };

  return HOC;
};

export default withRedux;
