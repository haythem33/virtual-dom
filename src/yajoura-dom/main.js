export const yajoura_dom = newDom => {
  create_node(newDom);
};
const create_node = newDom => {
  let init = document.getElementById('root');
  let Olddom = [
    {
      type: init.tagName.toLowerCase(),
      props: props(init),
      value: getValueNode(init),
      children: Children(init)
    }
  ];
  let NewDom = [
    {
      type: newDom.tagName.toLowerCase(),
      props: props(newDom),
      value: getValueNode(newDom),
      children: Children(newDom)
    }
  ];
  yajoura_Virtual_Dom(Olddom, NewDom, init);
};
const Children = init => {
  let child = [];
  if (init.children.length > 0) {
    for (let i = 0; i < init.children.length; i++) {
      let c = {
        type: init.children[i].tagName.toLowerCase(),
        props: props(init.children[i]),
        value: getValueNode(init.children[i]),
        children: Children(init.children[i])
      };
      child.push(c);
    }
  } else {
    return null;
  }
  return child;
};
const getValueNode = node => {
  return [].reduce.call(
    node.childNodes,
    function(a, b) {
      return a + (b.nodeType === 3 ? b.textContent : "");
    },
    ""
  );
};
const props = (element) => {
  let Props = element.getAttributeNames();
  let propsObject = [];
  for(let i = 0; i < Props.length; i++) {
    propsObject.push({propsName : Props[i], propsValue : element.getAttribute(Props[i])});
  }
  return propsObject;
}
const propsChange = (oldProps,newProps,Root) => {
 for(let i = 0,j = 0; i < newProps.length || j < oldProps.length ;i++,j++) {
    if(newProps[i] && !oldProps[j]) {
      Root.setAttribute(newProps[i].propsName, newProps[i].propsValue);
    } else {
      if(!newProps[i] && oldProps[j]) {
        Root.removeAttribute(oldProps[j]);
      } else {
         if(newProps[i].propsName !== oldProps[j].propsName || newProps[i].propsValue !== oldProps[j].propsValue) {
          Root.setAttribute(newProps[i].propsName, newProps[i].propsValue);
          Root.removeAttribute(oldProps[j]);
         }
      }
    }
 }
}
const yajoura_Virtual_Dom = (oldDom, newDom, Root) => {
  for (let i = 0, j = 0; i < newDom.length || j < oldDom.length; i++, j++) {
    if (!oldDom || (!oldDom[j] && newDom[i])) {
      console.log("adding element ...");
      let elem = document.createElement(newDom[i].type);
      elem.textContent = newDom[i].value;
      for(let p = 0; p < newDom[i].props.length; p++) {
        elem.setAttribute(newDom[i].props[p].propsName,newDom[i].props[p].propsValue);
      }
      Root.appendChild(elem);
      if (newDom[i].children) {
        yajoura_Virtual_Dom([], newDom[i].children, elem);
      } 
    } else {
      if (!newDom[i] && oldDom[j]) {
        console.log("delete element ...");
        Root.removeChild(Root.childNodes[j]);
        oldDom.splice(j, 1);
        j--;
      } else {
        if (newDom[i].type !== oldDom[j].type) {
          console.log("upadating elem ...");
          let elem = document.createElement(newDom[i].type);
          elem.textContent = newDom[i].value;
          for(let p = 0; p < newDom[i].props.length; p++) {
            elem.setAttribute(newDom[i].props[p].propsName,newDom[i].props[p].propsValue);
          }
          Root.replaceChild(elem, Root.childNodes[i]);
          yajoura_Virtual_Dom(
            oldDom[j].children || [],
            newDom[i].children || [],
            elem
          );
        } else {
          if (newDom[i].type === oldDom[j].type) {
            if (newDom[i].value !== oldDom[j].value) {
              if (
                Root !== undefined &&
                Root.children[i] !== undefined &&
                Root.children[i].textContent !== undefined
              ) {
                Root.children[i].textContent = newDom[i].value;
              } 
            }
            console.log("passing to the next element or passing to children");
            if (newDom[i].children || oldDom[i].children) {
              if (i > 0) {
                propsChange(oldDom[j].props || [],newDom[i].props || [], Root.children[i]);
                yajoura_Virtual_Dom(
                  oldDom[i].children || [],
                  newDom[i].children || [],
                  Root.childNodes[i]
                );
              } else {
                propsChange(oldDom[j].props || [],newDom[i].props || [], Root);
                yajoura_Virtual_Dom(
                  oldDom[i].children || [],
                  newDom[i].children || [],
                  Root
                );
              }
            }
          }
        }
      }
    }
  }
};
