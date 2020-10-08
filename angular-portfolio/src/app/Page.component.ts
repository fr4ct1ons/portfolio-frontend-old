import {Component, Input} from "@angular/core"

@Component({
    selector: "Page",
    templateUrl: "./Page.component.html"
})

export class Page {
    @Input() title : string;
    @Input() subtitle : string;
}