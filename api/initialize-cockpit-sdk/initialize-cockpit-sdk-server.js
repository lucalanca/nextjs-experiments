import CockpitSDK from "cockpit-sdk";
import OPTIONS from "./cockpit-options";

export default function initializeCockpitSDK() {
  let cockpit;
  if (process.___COCKPIT_SDK___) {
    cockpit = process.___COCKPIT_SDK___;
  } else {
    cockpit = process.___COCKPIT_SDK___ = new CockpitSDK(OPTIONS);
  }

  return cockpit;
}
