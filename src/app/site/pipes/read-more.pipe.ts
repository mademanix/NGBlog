import {Pipe, PipeTransform} from '@angular/core';
import {Api} from '../../utils/const/appsetting.const';

@Pipe({
    name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

    private readMoreValue = `<!-- read more -->`;

    transform(value: any, ...args: any[]): any {
        const anchorReadMore = `<br/><a href="${Api.GET_ONE_POST}${args[0]}"> Czytaj więcej »</a>`;
        const endIndex = value.indexOf(this.readMoreValue);
        const returnSliceText = value.slice(0, endIndex === -1 ? Infinity : endIndex);

        return endIndex === -1 ? returnSliceText : returnSliceText + anchorReadMore;
    }

}
