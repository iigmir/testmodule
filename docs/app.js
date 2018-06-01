import { the_json , square } from "./app_contain.js";

let s = "";
let n = 4

the_json.forEach( e =>
{
    s += "<tr>";
        s += "<td>" + e.foo + "</td>";
        s += "<td>" + e.bar + "</td>";
        s += "<td>" + e.baz + "</td>";
    s += "</tr>";
});

document.querySelector("#app tbody").innerHTML = s;
document.querySelector("#num").innerHTML = "The square of " + n + " is " + square(4);