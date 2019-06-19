import { Component, OnInit } from '@angular/core';
import { AllMediaService } from '../../all-media.service';
declare const window: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    listImages: any;
    constructor(private allMediaService: AllMediaService) { }

    ngOnInit() {
        this.allMediaService.getListImages().subscribe(data => {
            if(data && data.length > 0) {
                data.length = 200;
                this.listImages = data;
            }
        });
    }

    getUrlParam( paramName ) {
        var reParam = new RegExp( '(?:[\?&]|&)' + paramName + '=([^&]+)', 'i' );
        var match = window.location.search.match( reParam );

        return ( match && match.length > 1 ) ? match[1] : null;
    }

    returnFileUrl(path: string) {
        var funcNum = this.getUrlParam( 'CKEditorFuncNum' );
        window.opener.CKEDITOR.tools.callFunction( funcNum, path );
        window.close();
    }

}
