import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector:"ContactForm",
    templateUrl: "./ContactForm.component.html",
})
export class ContactForm {
    email="";
    subject="";
    message="";

    onSubmit()
    {
        const errorEmail = this.isEmailValid(this.email);
        const errorSubject = this.isSubjectValid(this.subject);
        const errorMessage = this.isMessageValid(this.message);

        if(!errorEmail)
            alert("Please, insert a valid email.")
        else if(!errorSubject)
            alert("Please, insert a valid subject.")
        else if(!errorMessage)
            alert("Please, make sure the message field is not empty.")
        else
        {
            alert("All good!");
        }
    }

    isEmailValid (value): boolean
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }

    isSubjectValid (value): boolean
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }

    isMessageValid (value): boolean
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }
}