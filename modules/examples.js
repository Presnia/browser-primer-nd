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
