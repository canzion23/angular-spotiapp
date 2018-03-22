import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(imagenes: any[], pocision: number = 1): any {

    let noimagen: string = "assets/img/noimage.png";

    if ( !imagenes ) {
      return noimagen;
    }

    if (pocision != null ) {
      return (imagenes.length > 0) ? imagenes[pocision].url : noimagen;

    }

  }

}
