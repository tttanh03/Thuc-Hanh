import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let result = ''
        
        switch(value) {
            case 0: 
                result = 'Available'
                break;
            case 1: 
                result = 'Serving'
                break;
            default: 
                result = 'N/A'
        }

        return result;
    }
}