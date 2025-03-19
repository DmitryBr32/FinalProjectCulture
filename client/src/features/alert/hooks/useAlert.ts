import { useContext } from 'react';
import { AlertContext } from '../provider/AlertContext';

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert должен использоваться внутри AlertProvider');
  }
  return context;
};
