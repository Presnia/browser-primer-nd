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

export { renderTree };