import { Pipe, PipeTransform } from '@angular/core';
import {InstrumentName} from "../../../models";

@Pipe({
  name: 'displaySpotName'
})
export class DisplaySpotNamePipe implements PipeTransform {

  transform(spotName: keyof typeof InstrumentName | undefined): string {
    if(!spotName || !InstrumentName[spotName]){
      return '';
    }
    return InstrumentName[spotName];
  }

}
