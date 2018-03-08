import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noimagen: string = "assets/img/noimage.png";

    if ( !imagenes ) {
      return noimagen;
    }

    return (imagenes.length > 0 ) ? imagenes[1].url : noimagen;

  }

}
