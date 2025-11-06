// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
/*
fetch("https://jsonplaceholder.typicode.com/users");
console.log(fetch("https://jsonplaceholder.typicode.com/users"));
fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  response.json()
);
console.log(
  fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  )
);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    const newUsers = users.map((user) => user.name);
    console.log(newUsers);
  });
*/

async function getUsersName() {
  const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const transformUsers = await getUsers.json();
  const newUsers = await transformUsers.map((users) => users.name);
  console.log(newUsers);
}

getUsersName();
