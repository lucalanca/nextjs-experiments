import CockpitSDK from "cockpit-sdk";

export default function initializeCockpitSDK() {
  let cockpit;
  if (process.___COCKPIT_SDK___) {
    api = process.___COCKPIT_SDK___;
  } else {
    cockpit = new CockpitSDK({
      host: process.env.COCKPIT_HOST,
      accessToken: process.env.COCKPIT_ACCESS_TOKEN
    });
  }

  return cockpit;
}
