export interface CarI {
  id: number;
  name: string;
  color: string;
  isEngineStarted: boolean;
  logo?: string;
}

export interface WinCarI extends CarI {
  velocity: number;
  distance: number;
}

export type EngineStatus = "start" | "stop" | "drive";


export interface GetCarsI {
  items: CarI[];
  totalCount: number;
}

export interface StartStopI {
  status: string;
  success?: boolean;
  velocity?: number;
  distance?: number;
}

export interface DriveI {
  status: number;
}
