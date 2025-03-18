'use client';

import React, { createContext, ReactNode, useContext, useState } from "react";

interface RoomContextType {
  roomType: string;
  setRoomType: (roomType: string) => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [roomType, setRoomType] = useState<string>("");

  return (
    <RoomContext.Provider value={{ roomType, setRoomType }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomType = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoomType must be used within a RoomProvider');
  }
  return context;
};
