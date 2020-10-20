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

function renderTree(tree) {
    const rootUlElement = document.createElement("ul");
    rootUlElement.style.background = "tomato";
    rootUlElement.id = "topic-list2";

    const liEvent = document.createElement("li");
    rootUlElement.append(liEvent);
    liEvent.innerHTML = "EventTarget";

    const ulEvent = document.createElement("ul");
    rootUlElement.append(ulEvent);
    
    const liNode = document.createElement("li");
    ulEvent.append(liNode);
    liNode.innerHTML = "Node";

    const ulNode = document.createElement("ul");
    ulEvent.append(ulNode);
    ulNode.classList.add('sub-list1');

    const liText = document.createElement("li");
    ulNode.append(liText);
    liText.innerHTML = "Text";
    liText.classList.add('for-query');

    const liText1 = document.createElement("li");
    ulNode.append(liText1);
    liText1.innerHTML = "Comment";
    liText1.classList.add('for-query');

    const liText2 = document.createElement("li");
    ulNode.append(liText2);
    liText2.innerHTML = "Element";
    liText2.classList.add('for-query');

    const ulElement = document.createElement("ul");
    ulNode.append(ulElement);

    const liElement1 = document.createElement("li");
    ulElement.append(liElement1);
    liElement1.innerHTML = "SVGElement";

    const liElement2 = document.createElement("li");
    ulElement.append(liElement2);
    liElement2.innerHTML = "HTMLElement";

    const ulHTMLElement = document.createElement("ul");
    liElement2.append(ulHTMLElement);

    const liHTMLElement1 = document.createElement("li");
    ulHTMLElement.append(liHTMLElement1);
    liHTMLElement1.innerHTML = "HTMLInputElement";

    const liHTMLElement2 = document.createElement("li");
    ulHTMLElement.append(liHTMLElement2);
    liHTMLElement2.innerHTML = "HTMLBodyElement";

    const liHTMLElement3 = document.createElement("li");
    ulHTMLElement.append(liHTMLElement3);
    liHTMLElement3.innerHTML = "HTMLAnchorElement";
    

// convert tree into elements
    const rootDiv = document.getElementById("root");
    rootDiv.style.background = "silver";
    rootDiv.style.padding = "10px";

  return rootUlElement;
}

export function renderPage() {
  const browserTreeList = renderTree(browserTree);
  const nodesHierarchyList = renderTree(nodesHierarchy);

  const rootDiv = document.getElementById("root");
  rootDiv.append(browserTreeList);
  rootDiv.append(nodesHierarchyList);
}

export function buildPage() {
  document.body.myOwnData = {
    name: "Js",
    place: "IT-Academy",
  };

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
