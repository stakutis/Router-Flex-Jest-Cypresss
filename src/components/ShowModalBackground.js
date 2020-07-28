import React, { useState } from "react";

/******************************************
 * ShowModalBackground
 *
 * Very simple  and convenient component to create a full-screen "blocking" background with
 * a props-specified color (likely with transparency, defaulting to black-80%) and then
 * renders the  caller's  children in a horizontally and vertically  centered locatiion.
 * The caller also  provides a boolean on whether-or-not to have this component active or not,
 * and a props callback  for when the user clicks anyway on the background -- typically used
 * for the  caller to turn the boolean/display OFF  to hide the modal.
 *
 * Typically the caller will have its main child be a div that sets up colors, borders
 * and PROBABLY will declare its onClick to  stopPropagation() so that clicking on the message
 * does NOT propagate up and thus call onClick() here which likely will call back to the child
 * and set the 'display modal' to false (unlesss they want that behavior;  many do).
 ******************************************/
const ShowModalBackground = (props) => {
  if (!props.shouldDisplayModal) return <></>;
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor || "rgba(0, 0, 0, 0.8",
        position: "absolute",
        left: "0px",
        top: "0px",
        right: "0",
        bottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export const MessageModal = (props) => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(true);
  return (
    <ShowModalBackground
      shouldDisplayModal={shouldDisplayModal}
      onClick={(e) => {
        setShouldDisplayModal(false);
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2emx",
          border: "5px solid green",
          borderRadius: "20px",
          backgroundColor: "light-blue",
          padding: "20px",
        }}
      >
        {props.children}
      </div>
    </ShowModalBackground>
  );
};

export default ShowModalBackground;
