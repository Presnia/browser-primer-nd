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

export { nodesHierarchy };