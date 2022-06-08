// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
    function (event){
        function sayHello(event) {
            console.log(event);
            this.textContent = "Said it!"
            var name =
                document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";

//     document
//         .getElementById("content")
//         .textContent = message;
// }
            document
                .getElementById("content")
                .innerHTML = message;

            if (name === "student"){
                var title =
                    document
                        .querySelector("#title")
                        .textContent;
                title += " & loving it!";
                document
                    .querySelector("#title")
                    .textContent = title;
            }
        }

        document.querySelector("button")
            .addEventListener("click", sayHello);

        document.querySelector("body")
            .addEventListener("mousemove",
                function (event) {
                    if (event.shiftKey === true) {
                        console.log("X: " + event.clientX);
                        console.log("Y: " + event.clientY);
                    }
                }
                );

    }
    );




// document.querySelector("button")
//     .onclick = sayHello;