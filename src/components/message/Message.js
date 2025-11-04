import React from "react";

const Message = () => {
  console.log("message component rendering  exactly  ");
  return (
    <>
      <h1>Message</h1>;
    </>
  );
};

export default React.memo(Message);
