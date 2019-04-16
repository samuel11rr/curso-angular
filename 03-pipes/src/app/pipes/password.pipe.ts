import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, hide:boolean=true): any {
    let longitud=value.length;
    let oculta='';

    for( let i=0; i<longitud; i++ ){
      oculta=oculta+'*';
    };
    if(hide==true){
      return oculta;
    }else{
      return value;
    };

  }

}
