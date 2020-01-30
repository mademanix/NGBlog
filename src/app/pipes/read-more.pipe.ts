import {Pipe, PipeTransform} from '@angular/core';
import {Api} from '../interfaces/appsetting';

@Pipe({
    name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        const anchorReadMore = ` <a href="${Api.GET_ONE_POST}${args[0]}"> Czytaj więcej...</a>`;
        return value.substr(0, 50) + anchorReadMore;
    }

}
