const isClient = "undefined" !== typeof window;

export default (isClient
  ? require("./initialize-cockpit-sdk-client").default
  : require("./initialize-cockpit-sdk-server"));
