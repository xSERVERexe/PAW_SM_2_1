(function() {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        let ul = "<ul>";

        array.forEach((post) => {
          ul += `
            <li>
              ID: ${post.id}<br>
              Tytuł: ${post.title}<br>
              Treść: ${post.body}
            </li><br>
          `;
        });

        ul += "</ul>";
        answer.innerHTML = ul;
      })
  });

  cw2.addEventListener("click", function() {
    // TODO
  });

  cw3.addEventListener("click", function() {
    // TODO
  });
})();