// TODO: this throws errors
// import initializeCockpitSDK from "../initialize-cockpit-sdk";

export default function fetchEmployees(options) {
  console.log("fetching...");
  return fetch(
    `${process.env.COCKPIT_HOST}api/collections/get/employees?token=${
      process.env.COCKPIT_ACCESS_TOKEN
    }`
  )
    .then(res => res.json())
    .then(res => res.entries);
}
