import React, { useState } from "react";
import ShowModalBackground, { MessageModal } from "./ShowModalBackground";

const Adv = (props) => {
  const [showAd, setShowAd] = useState(true);
  if (showAd)
    return (
      <div className="Adv">
        This is an add
        <br />
        <button
          onClick={(e) => {
            setShowAd(false);
          }}
        >
          Cancel
        </button>
      </div>
    );
  return (
    <MessageModal>
      This is a test modal
      <br />
      Click anywhere on the page and it should go away
      <p>Or click my button</p>
      <button>My Button</button>
    </MessageModal>
  );
};
export const TallPage = (props) => {
  return (
    <div>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page Try to scroll down...</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page Make sure the banners and 'ad' stay in place...</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <Adv />

      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>
        Lots and lots to talk about....test test test ...Dont get the virus!!
      </p>
      <p>
        Lots and lots to talk about....test test test ...Dont get the virus!!
      </p>
      <p>
        Lots and lots to talk about....test test test ...Dont get the virus!!
      </p>
      <p>
        Lots and lots to talk about....test test test ...Dont get the virus!!
      </p>
      <p>Tall page</p>
      <p>Tall page</p>
      <p>Tall page</p>
    </div>
  );
};
