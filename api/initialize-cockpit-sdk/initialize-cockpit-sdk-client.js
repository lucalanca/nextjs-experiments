import CockpitSDK from "cockpit-sdk";
import OPTIONS from "./cockpit-options";

export default function initializeCockpitSDK() {
  const cockpit = new CockpitSDK(OPTIONS);

  return cockpit;
}
