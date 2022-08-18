import React from "react";

function Alerts(props) {
  const Capitalize = (str) => {
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{ Capitalize(props.alert.type)}! </strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alerts;
