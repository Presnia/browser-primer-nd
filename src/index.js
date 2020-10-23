/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

const browserTree = {
  label: "Window",
  children: [
    {
      label: "DOM - Document Object Model; DOM Tree",
      children: [
        {
          label: "document",
          children: [],
        },
        {
          label: "CSSOM - CSS Object Model",
          children: [],
        },
      ],
    },
    {
      label: "BOM - Browser Object Model",
      children: [
        {
          label: "navigator",
          children: [],
        },
        {
          label: "screen",
          children: [],
        },
        {
          label: "location",
          children: [],
        },
        {
          label: "frames",
          children: [],
        },
        {
          label: "history",
          children: [],
        },
        {
          label: "XMLHttpReques",
          children: [],
        },
      ],
    },
    {
      label: "JavaScript",
      children: [
        {
          label: "Object",
          children: [],
        },
        {
          label: "Array",
          children: [],
        },
        {
          label: "Function",
          children: [],
        },
        {
          label: "...",
          children: [],
        },
      ],
    },
  ],
};

// рекурсия

const nodesHierarchy = {
  label: "EventTarget",
  children: [
    {
      label: "Node",
      children: [
        {
          label: "Text",
          children: [],
        },
        {
          label: "Comment",
          children: [],
        },
        {
          label: "Element",
          children: [
            {
          label: "SVGElement",
          children: [],
        },{
          label: "HTMLElement",
          children: [
            {
          label: "HTMLInputElement",
          children: [],
        },
        {
          label: "HTMLBodyElement",
          children: [],
        },
        {
          label: "HTMLAnchorElement",
          children: [],
        },
          ],
        },
          ],
        },
      ],
    },
  ],
};

function renderTree(treeArray) {
  if (treeArray.length === 0) return null;

  const rootUlElement = document.createElement("ul");

  treeArray.forEach((node) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = node.label;
    rootUlElement.append(liElement);

    const subTree = renderTree(node.children);
    if (subTree !== null) rootUlElement.append(subTree);
  });

  return rootUlElement;
}

function wholeArray() {
  let arr1 = Object.values(browserTree);
  let arr2 = Object.values(nodesHierarchy);
  let result = [...arr1, ...arr2];

  return result;
}
const trees = wholeArray();

const complexArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, [11, 12]]];

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

  const flatArray = flattenArray(complexArray);
  rootDiv.append(renderArray(flatArray));

  const flatOurArray = flattenArray(trees);
  rootDiv.append(renderArray(flatOurArray));
}

export function buildPage() {
  document.body.myOwnData = {
    name: "Js",
    place: "IT-Academy",
  };











  // examples

  document.body.sayHello = function () {
    alert("Hi!!!!");
  };

  const rootDiv = document.getElementById("root");
  rootDiv.style.background = "green";
  rootDiv.style.padding = "10px";

  const topicList = document.getElementById("topic-list");
  topicList.style.background = "red";

  const sl1 = document.querySelector(".sub-list1");
  const r1 = sl1.querySelector(".for-query");

  const sl2 = document.querySelector(".sub-list2");
  const r2 = sl2.querySelector(".for-query");

  const sl3 = document.querySelector(".sub-list3");
  const r3 = sl3.querySelector(".for-query");

  const subItem = document.querySelectorAll(".function-sub-item");

  sl2.childNodes.forEach((node) => {
    if (node.innerText !== undefined) {
      node.style.background = "blue";
    }
  });

  sl2
    .querySelectorAll("li")
    .forEach((node) => (node.style.background = "yellow"));

  for (let i = 0; i < sl2.children.length; i++) {
    sl2.children[i].style.background = "gray";
  }

  // alert(document.body.id);
  // alert(document.body.getAttribute("myCoolAttribute"));
  const textNode = document.createTextNode(" My text&amp;");

  const infoMessage = document.createElement("div");
  infoMessage.className = "alert";
  infoMessage.innerHTML = "<strong>&amp;This is info message.</strong>";

  infoMessage.append(textNode);

  const bodyInfoMessage = document.createElement("div");
  bodyInfoMessage.className = "alert";
  bodyInfoMessage.innerHTML = "This is info message.";

  document.body.append(bodyInfoMessage);

  rootDiv.prepend(infoMessage);

  const clone = infoMessage.cloneNode(true);
  clone.innerHTML = "I am a clone";

  rootDiv.append(clone);

  // rootDiv.remove();
}
