// src/types.ts
export interface Car {
  id: number | string;
  name: string;
  color: string;
  isEngineStarted?: boolean;
}

export interface WinCar {
  id: number | string;
  velocity: string;
  distance: string;
  name?: string;
}
