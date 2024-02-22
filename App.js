const h1 = React.createElement(
  "h1",
  { id: "title" },
  "Hello Everyone from react"
);
const h2 = React.createElement("h1", { id: "title" }, "Welcome all");
const container = React.createElement("div", { id: "container" }, [h1, h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
