import {InstrumentName} from "./intrument.enum";

export interface PriceModel {
  id: number;
  instrumentName: Instruments,
  bid: number,
  ask: number;
  timestamp: string;
}

export type Instruments = keyof typeof InstrumentName;
