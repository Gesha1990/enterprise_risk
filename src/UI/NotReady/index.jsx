import { Result } from "antd";
import { Link } from "react-router-dom";
import * as React from "react";

const NotReady = ({ title }) => (
  <Result
    title="In progress"
    subTitle={`Sorry, the page ${title || ""} you visited does not exist yet.`}
    extra={<Link to="/">Back Home</Link>}
  />
);
export default NotReady;
