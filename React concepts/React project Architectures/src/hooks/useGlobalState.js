import { useContext } from 'react';
import { GlobalContext } from '../context/global-context';

export function useGlobalState() {
  const { globalState } = useContext(GlobalContext);
  return [globalState];
}
