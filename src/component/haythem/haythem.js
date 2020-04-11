import { yajouraComponent } from 'yajoura-router/src/web_components_yajoura/yajoura';
let selectorHaythem = {
    Componentselector: ["haythem-component"],
    HtmlSelector: ["./src/component/haythem/haythem.html"],
    CssSelector: ["./src/component/haythem/haythem.css"]
}
class haythem extends yajouraComponent {
  constructor() {
    super(selectorHaythem);
  }
}
export {haythem , selectorHaythem}; 