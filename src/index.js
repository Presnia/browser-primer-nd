/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import { browserTree } from "../modules/browserTree.js";
import { nodesHierarchy } from "../modules/nodesHierarchy.js";
import { renderTree } from "../modules/renderTree.js";

const trees = wholeArray();

function wholeArray() {
  let arr1 = Object.values(browserTree);
  let arr2 = Object.values(nodesHierarchy);
  let result = [...arr1, ...arr2];

  return result;
}

function flattenArray(array) {
  let result = [];
  array.forEach((value) => {
    if (Array.isArray(value)) {
      result = [...result, ...flattenArray(value)];
    } else {
      result = [...result, value];
    }
  });
  return result;
  /* return array.reduce((acc, val) => 
  Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []); */
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

  const flatOurArray = flattenArray(trees);
  rootDiv.append(renderArray(flatOurArray));
}

export function buildPage() {
  document.body.myOwnData = {
    name: "Js",
    place: "IT-Academy",
  };
}
