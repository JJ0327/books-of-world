import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { open, close } from "modules/header/header";
import Header from "components/Header/Header";

function HeaderContainer() {
  const isOpen = useSelector((state: RootState) => state.header.isOpen);
  const dispatch = useDispatch();

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />;
}

export default HeaderContainer;
