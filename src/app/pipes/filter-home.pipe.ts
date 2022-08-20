import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHome'
})
export class FilterHomePipe implements PipeTransform {

  transform(value:any, arg: any): any {
    let resultBusqueda = [];

    for(let item of value){
    if(item.responsable_directo?.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
       resultBusqueda.push(item);
    };

    };
    return resultBusqueda;
  }

}
