import initializeCockpitSDK from "../initialize-cockpit-sdk";

export default function fetchEmployees(options = {}) {
  const cockpit = initializeCockpitSDK();
  debugger;
  return cockpit.collectionGet("employees", options);
  return Promise.resolve(yay => {
    cockpit.collection("employees", options).get(result => {
      debugger;
      yay(result);
    });
  });

  // return fetch(
  //   `${process.env.COCKPIT_HOST}api/collections/get/employees?token=${
  //     process.env.COCKPIT_ACCESS_TOKEN
  //   }`
  // )
  //   .then(res => res.json())
  //   .then(res => res.entries);
}
