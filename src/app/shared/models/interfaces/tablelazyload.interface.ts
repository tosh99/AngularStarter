import {Injectable} from '@angular/core';

export interface TablelazyloadInterface {
    onScrollEnd(): void;
}


@Injectable()
export class TablelazyloadInterfaceService implements TablelazyloadInterface {
    onScrollEnd() {
    }

}
