import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    //template: `<div></div>`,
    templateUrl: './app.component.html'
})
export class AppComponent {
    // Fundamental Class
    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = false;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    }

    // Fundamental Html
    pageHeader: string = "Employee Details";
    imagePath: string = 'http://www.plutosols.com/Content/logo/pluto_logo_profile_white_360_align_left.png';
    isDisabled: boolean = true;
    // Use interpolation to concatenate strings
    // Use property-binding to set an element property to a non-string data
    badHtml: string = "Hello <script>alert('Hello World!')</script>";
    firstName: string = 'Jame';
    lastName: string = 'Bond';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    };
}