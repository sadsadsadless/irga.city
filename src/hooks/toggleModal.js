import { useState } from "react"; 
const bodyScrollLock = require("body-scroll-lock");

const toggleModal = (elem) => {
  const [state, setState] = useState(false);
  const disableScrollLock = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  return [
    state,
    () => {
      setState(!state);
      state == true ? enableBodyScroll(elem) : disableScrollLock(elem);
    }
  ]
};

export { toggleModal };