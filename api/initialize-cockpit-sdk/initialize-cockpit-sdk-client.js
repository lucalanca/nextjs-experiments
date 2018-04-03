import CockpitSDK from "cockpit-sdk";

export default function initializeCockpitSDK() {
  debugger;
  const cockpit = new CockpitSDK({
    host: process.env.COCKPIT_HOST,
    accessToken: process.env.COCKPIT_ACCESS_TOKEN
  });

  return cockpit;
}
