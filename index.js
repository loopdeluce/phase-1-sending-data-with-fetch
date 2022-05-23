// Add your code here

function submitData(userName, userEmail){
  const newUser = {
    name: userName,
    email: userEmail
  } 

  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(resp => resp.json())
  .then(json => postIdToDOM(json))
  .catch(error => errorMessage(error))
}

function postIdToDOM(json) {
  const id = json.id
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = id;
  ul.appendChild(li);
  document.querySelector("body").appendChild(ul);
}

function errorMessage(error) {
  const message = error.message;
  const p = document.createElement("p");
  p.textContent = message;
  document.querySelector("body").appendChild(p);
}

submitData('user1', 'Lucy');

