import React from "react";
import ReactDOM from "react-dom/client"
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

let h1Tag2 = (<h1 className="child"> I am h1 tag using JSX 
              </h1>)

// in this part I am creating the nested component  


function Paragragh(){
  return (
    <p className="ptag"> I am p tag </p>
  )
}

console.log(h1tag); // this H1tag is React element ( object )

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Paragragh/>); // render work is to create the object( react element ) into HTML and put it into the HTML
