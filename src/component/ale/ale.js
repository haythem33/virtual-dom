import { yajouraComponent } from "yajoura-router/src/web_components_yajoura/yajoura";

let selectorAle = {
    Componentselector: ["ale-component"],
    HtmlSelector: ["./src/component/ale/ale.html"],
    CssSelector: ["./src/component/ale/ale.css"]
}
class ale extends yajouraComponent {
    constructor() {
        super(selectorAle)
    }
}
export {ale , selectorAle};