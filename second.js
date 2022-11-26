//Just to show off that we can still load on other pages and still have the updated data
function loadAndPrint() {
  let arr = JSON.parse(window.localStorage.getItem("myArray"));
  console.log(arr);
}
