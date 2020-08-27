import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>`;

// console.log(getSomeDataSynchronously());

// getSomeDataAsynchronously(errorHandler, resultHandler);
// function resultHandler(data) {
//   console.log("response is ", data);
// }
// function errorHandler(error) {
//   console.log(error.message);
// }

// function getSomeDataSynchronously() {
//   return "Sync Data";
// }

// function getSomeDataAsynchronously(eh, cb) {
//   setTimeout(function returnThatData() {
//     //return "ASync Data";
//     cb("async data");
//   }, 3000);
// }

getUserId().then(
  (userId) => {
    console.log(userId);
    getUserDetails(userId).then((userDetails) => {
      console.log(userDetails);
    });
  },
  (rejectReason) => {
    console.log(rejectReason);
  }
);

function getUserId() {
  console.log("Promise");
  const shouldReject = false; //Math.round(Math.random());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Promize could not be fulfilled");
      } else {
        resolve(2);
      }
    }, 500);
  });
}

function getUserDetails(userId) {
  console.log("Promise");
  const shouldReject = false; //Math.round(Math.random());
  const users = [
    {
      name: "Rod",
      phone: 563885555
    },
    {
      name: "Rod",
      phone: 563885555
    },
    {
      name: "Rod",
      phone: 563885555
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Promize could not be fulfilled");
      } else {
        resolve(users[userId]);
      }
    }, 500);
  });
}
