/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import { browserTree } from "../modules/browserTree.js";
import { nodesHierarchy } from "../modules/nodesHierarchy.js";
import { renderTree } from "../modules/renderTree.js";

const trees = wholeArray();

function wholeArray() {
  let arr1 = Object.values(browserTree);
  let arr2 = Object.values(nodesHierarchy);
  let result = [...arr1[1], ...arr2[1]];

  return result;
}

function flattenArray(array) {
  let result = [];

  if(Array.isArray(array)) {
    array.forEach((value) => {
      if (value.children && value.children.length !== 0) {
        result = [...result, value, ...flattenArray(value.children)];
      } else {
        result = [...result, value];
      }
    });
  }

  return result;
}


function renderArray(array) {
  const p = document.createElement("p");
  p.innerHTML = JSON.stringify(array);
  return p;
}

export function renderPage() {
  const tree = renderTree([browserTree, nodesHierarchy]);

  const rootDiv = document.getElementById("root");
  if (tree !== null) rootDiv.append(tree);

  let flatOurArray = flattenArray(trees);

  flatOurArray = flatOurArray.map((el) => el.label)
  
  rootDiv.append(renderArray(flatOurArray));
}

export function buildPage() {
  document.body.myOwnData = {
    name: "Js",
    place: "IT-Academy",
  };
}
