import { yajouraComponent } from "yajoura-router/src/web_components_yajoura/yajoura";

let amirSelector = {
    Componentselector: ["amir-component"],
    HtmlSelector: ["./src/component/amir/amir.html"],
    CssSelector: ["./src/component/amir/amir.css"]
}
class amir extends yajouraComponent {
    constructor() {
        super(amirSelector);
        console.log('amir compoenent');
    }
}
export {amir, amirSelector};