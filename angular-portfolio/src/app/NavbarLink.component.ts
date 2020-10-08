import {Component, Input, EventEmitter, Output} from "@angular/core"

@Component({
    selector: "NavbarLink",
    templateUrl: "./NavbarLink.component.html"
})

export class NavbarLink {
    @Input() linkName : string;
    @Input() linkType : string;
    @Input() linkHref: string; 
    @Input() index : number;
    @Output() OnChangePage = new EventEmitter();

    ChangePage()
    {
        //alert(this.index);
        this.OnChangePage.emit({index: this.index});
    }
}