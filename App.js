{
  /* <div class="parent">
        <div class="child">
            <div class="box"></div>
        </div>
    </div> */
}
//let h1Tag = React.createElement("h1",{id : "h1tag", className : "classtag"}, "Hello world from React");

let h1tag = React.createElement(
  "div",
  { className: "parent" },
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("div", { className: "box" }, "I am a box ")
  )
);

// in this part I am creating the nested component  

console.log(h1tag); // this H1tag is React element ( object )

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1tag); // render work is to create the object( react element ) into HTML and put it into the HTML
