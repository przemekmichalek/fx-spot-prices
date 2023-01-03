import { DisplaySpotNamePipe } from './display-spot-name.pipe';
import {InstrumentName} from "../../../models";

describe('DisplaySpotNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DisplaySpotNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display instrument name for key EURJPY', () => {
    const pipe = new DisplaySpotNamePipe();

    const displayName = pipe.transform('EURJPY');

    expect(displayName).toBe(InstrumentName.EURJPY);
  });

  it('should display instrument name for key EURUSD', () => {
    const pipe = new DisplaySpotNamePipe();

    const displayName = pipe.transform('EURUSD');

    expect(displayName).toBe(InstrumentName.EURUSD);
  });

  it('should display instrument name for key GBPUSD', () => {
    const pipe = new DisplaySpotNamePipe();

    const displayName = pipe.transform('GBPUSD');

    expect(displayName).toBe(InstrumentName.GBPUSD);
  });

  it('should not display instrument name if given key is not present in InstrumentName enum', () => {
    const pipe = new DisplaySpotNamePipe();

    const displayName = pipe.transform('' as any);

    expect(displayName).toBe('');
  });
});
