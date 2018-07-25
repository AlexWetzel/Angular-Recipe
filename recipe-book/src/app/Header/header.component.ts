import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    // @Output() router = new EventEmitter();
    // page = 'recipe';

    ngOnInit() {
        // this.changePage(this.page);
    }

    // changePage(page) {
    //     this.router.emit(page);
    // }


}