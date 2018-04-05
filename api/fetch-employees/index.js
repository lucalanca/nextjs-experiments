import initializeCockpitSDK from "../initialize-cockpit-sdk";

export default function fetchEmployees(options = {}) {
  const cockpit = initializeCockpitSDK();
  return cockpit.collectionGet("employees", options);
}
