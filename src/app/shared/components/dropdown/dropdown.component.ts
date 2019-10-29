import {Component, EventEmitter, HostListener, Input, OnChanges, Output} from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {

    // Data Inputs
    @Input() items: Array<any>;
    @Input() selectedItem: any;
    @Input() placeholder = 'Select';
    @Input() bindLabel: string;
    @Input() bindValue: string;


    @Input() isSearchable = true;
    @Input() isClearable = true;


    @Input() isMultiSelect = false;
    @Input() isAddTag = false;

    @Input() style = {};
    @Input() theme = 'default';
    @Input() isDebugMode = true;

    // Outputs
    @Output() selectedItemChange = new EventEmitter();

    // Internal UI Variables
    customItems = [];
    isItemsDisplayed = false;
    isErrorOccured = false;
    errormessage = '';

    searchText: string;


    constructor() {
    }

    @HostListener('document:click', ['$event']) clickedOutside($event) {
        this.isItemsDisplayed = false;
    }

    ngOnChanges() {
        this.isErrorOccured = false;

        if (this.bindValue && !this.bindLabel) {
            this.toggleErrorMessage('Please provide both bind label and bind value');
        } else if (!this.bindValue && this.bindLabel) {
            this.toggleErrorMessage('Please provide both bind label and bind value');
        }

        if (this.isMultiSelect === true) {
            if (this.selectedItem.constructor !== Array) {
                this.toggleErrorMessage('`selectedItem` must be an Array if `isMultiSelect` is true');
            }
        }

    }

    stopPropagation() {
        event.stopPropagation();
    }

    toggleItemDisplay() {
        event.stopPropagation();
        this.isItemsDisplayed = !this.isItemsDisplayed;
        if (this.items === undefined) {
            this.toggleErrorMessage('Loading...');
        }
    }

    selectItem(item) {
        if (this.isMultiSelect === false) {
            this.selectedItem = item;
        } else {
            if (this.selectedItem === undefined) {
                this.selectedItem = [];
            }
            this.selectedItem.push(item);
        }
        this.selectedItemChange.emit(this.selectedItem);


    }

    clearSelected() {
        event.stopPropagation();
        if (this.isMultiSelect) {
            this.selectedItem = [];
        } else {
            this.selectedItem = undefined;
        }
        this.selectedItemChange.emit(this.selectedItem);
    }

    deleteItem(item) {
        event.stopPropagation();
        this.customItems.splice(this.customItems.indexOf(item), 1);
        this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
    }

    addMultiItems() {
        if (this.isAddTag) {
            if (!this.customItems) {
                this.customItems = []
            }

            if (this.bindLabel) {
                const temp_dict = {};
                temp_dict[this.bindValue] = 0;
                temp_dict[this.bindLabel] = this.searchText;
                this.customItems.push(temp_dict);
            } else {
                this.customItems.push(this.searchText);
            }

            this.searchText = '';
        }
    }

    toggleErrorMessage(message?) {
        if (message) {
            this.isErrorOccured = true;
            this.errormessage = message;
        } else {
            this.isErrorOccured = false;
            this.errormessage = '';
        }
    }
}
