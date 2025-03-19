import React, { createContext, useState } from 'react';

type Alert = {
  id: number;
  message: string;
};

type AlertContextType = {
  alerts: Alert[];
  showAlert: (message: string) => void;
};

//! Контекст создается с помощью функции `React.createContext()`, которая возвращает объект с двумя компонентами: `Provider`
export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

//! `Provider` — это компонент, который используется для оборачивания других компонентов и предоставления им значений контекста. Он принимает одно обязательное свойство — `value`, которое определяет данные, доступные для всех дочерних компонентов.
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (message: string) => {
    const newAlert = {
      id: Date.now(),
      message,
    };

    setAlerts((prev) => [...prev, newAlert]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== newAlert.id));
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
