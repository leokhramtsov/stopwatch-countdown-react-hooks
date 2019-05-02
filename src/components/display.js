import React from "react";
import { formattedTime } from "../helpers/formattedTime";

const Display = ({ m, s, ms }) => (
  <div className="display">{formattedTime({ m, s, ms })}</div>
);

export default Display;
