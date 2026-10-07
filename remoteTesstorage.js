// @ts-nocheck
function onloadFunc() {
  console.log("test");
  putData("/names/-P3L7FY095FmNHmJOq23", {
    name: "mario",
    skill: "fireball",
    lives: 3,
  });
}

const BASE_URL =
  "https://remote-teststorage-default-rtdb.europe-west1.firebasedatabase.app/";
//GET data from Database
async function loadData(path = "") {
  let response = await fetch(BASE_URL + path + ".json");
  return (responseToJson = await response.json());
}
//add data from Database
async function postData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}
//delete data from Database
async function deleteData(path = "") {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}
//change data on a certain path
async function putData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}
