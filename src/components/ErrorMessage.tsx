import React from "react";

interface ErrorMessageProps {
  errorCode: string;
  message: string;
}

const ErrorMessage = ({ errorCode, message }: ErrorMessageProps) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center m-2 rounded p-2"
      style={{ backgroundColor: "rgb(255, 187, 187)" }}
    >
      <h4>
        Error code: <code>{errorCode}</code>
      </h4>
      <p className="mb-1">{message}</p>
    </div>
  );
};

export default ErrorMessage;
