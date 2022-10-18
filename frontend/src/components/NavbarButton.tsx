import { useState } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { navbarButtonState } from "../recoil_state";
import { NavbarButtonProps } from "./NavbarStyled";
import { buttonStates } from "./NavbarStyled";

const NavbarButton = (props: NavbarButtonProps) => {
  const [toggleBtn, setToggleBtn] = useRecoilState(navbarButtonState);

  const handleOnClick = (key: keyof buttonStates) => {
    console.log(key);
    const existingStates = { ...toggleBtn };
    existingStates[key] = !existingStates[key];
    setToggleBtn(existingStates);
  };

  return (
    <span>
      <FontAwesomeIcon
        className="btn"
        style={{ opacity: toggleBtn[props.name] ? 1 : 0.7 }}
        onClick={() => handleOnClick(props.name)}
        icon={props.icon}
        size="lg"
      />
    </span>
  );
};

export default NavbarButton;