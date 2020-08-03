import React, { useState } from "react";

/****************************************
 * Usage:
 * - Your children are what appears in the drop down
 * - Likely you'll put in <Link> or <NavLink> or <a> or other stuff
 * - ...OR, use the <DropDownItem> supplied here.
 * Props:
 * - label : This is what appears on the dropclick; required.
 * - labelStyle : A {{}} (or similar) for styling the label; optional.
 * - dropDownStyle: As above
 ****************************************/
export const DropDown = (props) => {
  const [dropDownDisplay, setDropDownDisplay] = useState("none");
  // Blend the default labelStyle with any supplied as a prop
  let labelStyle = {
    ...{
      display: "inline-block", // Critical if you want to set 'width'
      backgroundColor: "black",
      padding: "5px 10px 5px 10px",
      marginLeft: "5px",
      marginRight: "5px",
      color: "white",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "1em",
      fontWeight: "bold",
      border: "1px solid black",
      textAlign: "center",
      width: "80px",
    },
    ...props.labelStyle,
  };
  // Blend drop-down style too
  let dropDownStyle = {
    ...{
      position: "relative",
      backgroundColor: "rgba(238,238,238,0.9)",
      borderRadius: "5px",
      borderTop: "1px solid black",
      borderLeft: "1px solid black",
      borderRight: "4px solid rgba(5,5,50)",
      borderBottom: "4px solid rgba(5,5,50)",
      padding: "5px 0 5px 0",
      top: "calc(1em + 10px)",
    },
    ...props.dropDownStyle,
  };

  return (
    <div
      style={labelStyle}
      onMouseEnter={(e) => setDropDownDisplay("inline-block")}
      onMouseLeave={(e) => setDropDownDisplay("none")}
    >
      <div style={{ position: "absolute", display: dropDownDisplay }}>
        <div style={dropDownStyle}>{props.children} </div>
      </div>
      {props.label}
    </div>
  );
};

/******************************************
 * DropDownItem
 *   To be used inside of a <DropDown> component.
 *   Sets nice colors and values.
 *   On-mouse-over, indents item/section and changes text color
 *   If not overriden via a prop, will render as a <div>
 * Props:
 *   'as' = If not set, renders as <div>, else set it to something like as={NavLink}
 *   'style' To override the default style/fonts/size/attributes
 *   'to' = passed along as a prop to the rendered component
 * Note: Really should have a prop called 'props' (thus props.props) that gets expanded
 *    and passed to the rendered component *instead of* hard coding 'to' and 'exact'.
 */
export const DropDownItem = (props) => {
  let baseStyle = {
    ...{
      display: "block",
      padding: "5px",
      paddingLeft: "5px",
      margin: "0 0px",
      color: "black",
      transition: "all 0.3s ease",
      textDecoration: "none",
      fontSizeIGNORE: "1.2em",
      textAlign: "left",
    },
    ...props.style,
  };
  let [navLinkStyle, setNavLinkStyle] = useState(baseStyle);
  let As = props.as ? props.as : "div";

  return (
    <div>
      <As
        to={props.to}
        exact
        style={navLinkStyle}
        onMouseEnter={(e) =>
          setNavLinkStyle((prior) => {
            return { ...prior, paddingLeft: "15px", color: "blue" }; // These should be passed as props
          })
        }
        onMouseLeave={(e) =>
          setNavLinkStyle((prior) => {
            return {
              ...prior,
              paddingLeft: baseStyle.paddingLeft,
              color: baseStyle.color,
            };
          })
        }
      >
        {props.children}
      </As>
    </div>
  );
};
