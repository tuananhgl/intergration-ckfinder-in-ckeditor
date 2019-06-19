import { Component, OnInit } from '@angular/core';
declare const window: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        if (window.CKEDITOR) {
            window.CKEDITOR.replace('editor1', {
                filebrowserBrowseUrl: '/assets/ckfinder/ckfinder.html',
                filebrowserImageBrowseUrl: 'media',
                chooseFilesOnDblClick: false
            });
        }
    }

}
