import {Component, Input} from "@angular/core"

@Component({
    selector: "NavbarLink",
    templateUrl: "./NavbarLink.component.html"
})

export class NavbarLink {
    @Input() linkName : string;
    @Input() linkType : string;
    @Input() linkHref: string; 
}