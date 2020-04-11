import { haythem, selectorHaythem } from "../component/haythem/haythem";
import { defineAllComponent } from "yajoura-router/src/web_components_yajoura/yajoura";
import { hamidou, selectorHamidou } from "../component/hamidou/hamidou";
import {  amir, amirSelector } from "../component/amir/amir";
import { ale, selectorAle } from "../component/ale/ale";
export const routes = [
  {
    path: "/haythem",
    component: haythem,
    selector: selectorHaythem,
    children : [
        {
            path : '/hamidou',
            component : hamidou,
            selector : selectorHamidou,
            children : [
              {
                path : '/amir',
                component : amir,
                selector : amirSelector,
                children : [
                  {
                    path : "/ale",
                    component : ale,
                    selector : selectorAle
                  }
                ]
              }
            ]
        }
    ]
  },
];
defineAllComponent(routes);
