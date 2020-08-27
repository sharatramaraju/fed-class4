import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(getSomeDataSynchronously());

getSomeDataAsynchronously(errorHandler, resultHandler);
function resultHandler(data) {
  console.log("response is ", data);
}
function errorHandler(error) {
  console.log(error.message);
}

function getSomeDataSynchronously() {
  return "Sync Data";
}

function getSomeDataAsynchronously(eh, cb) {
  setTimeout(function returnThatData() {
    //return "ASync Data";
    cb("async data");
  }, 3000);
}
