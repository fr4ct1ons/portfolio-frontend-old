import {Component, Output, EventEmitter} from "@angular/core"

@Component({
    selector: "Navbar",
    templateUrl: "./Navbar.component.html"
})

export class Navbar {
    active = "LinkActive";

    @Output() OnChangePage = new EventEmitter();

    ChangePage($event)
    {
        //alert($event.index+500);
        this.OnChangePage.emit({index: $event.index})
    }
}