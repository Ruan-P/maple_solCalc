import "./styles.css";
var dateString = "";
var jsonIcon = {};
var jsonHexa = {};

const api_keys =
  "live_2785d54ef3df048746d128e9eddfa161acb6ced01ccf4b2413854d3979798bc4669635cb992e9abcce45cb52ba5e214f";
var ocid = "";
const url = "https://open.api.nexon.com/maplestory/";

const button = document.getElementById("search");
button.addEventListener("click", function () {
  getDate();
  getOcid(document.getElementById("name").value);
});

function getDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  dateString = "&date=" + year + "-" + month + "-" + (day - 1);
}

function getOcid(name) {
  var charName = name;
  var urlString = url + "v1/id?character_name=" + charName;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      ocid = data.ocid;
      getSkillsIcon();
      getHexaInfo();
    })
    .catch((error) => console.log(error));
}

function getSkillsIcon() {
  var urlString =
    url +
    "v1/character/skill?ocid=" +
    ocid +
    dateString +
    "&character_skill_grade=6";
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      jsonIcon = data;
    })
    .catch((error) => console.log(error));
}

function getHexaInfo() {
  var urlString = url + "v1/character/hexamatrix?ocid=" + ocid + dateString;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": api_keys,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      jsonHexa = data;
    })
    .catch((error) => console.log(error));
}

// document.getElementById("app").innerHTML = "Hello";
