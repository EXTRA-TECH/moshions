import * as React from "react";

import NetworkStatus from "./NetworkStatus";

const Offline: React.FC = ({ children }) => (
  <NetworkStatus>{(online: any) => (online ? null : children)}</NetworkStatus>
);

export default Offline;
