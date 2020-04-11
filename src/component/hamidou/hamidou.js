import { yajouraComponent } from "yajoura-router/src/web_components_yajoura/yajoura";
let selectorHamidou = {
    Componentselector: ["hamidou-component"],
    HtmlSelector: ["./src/component/hamidou/hamidou.html"],
    CssSelector: ["./src/component/hamidou/hamidou.css"]
}
class hamidou extends yajouraComponent {
    constructor() {
        super(selectorHamidou);
        console.log('hamidou');
    }
}
export {hamidou, selectorHamidou};