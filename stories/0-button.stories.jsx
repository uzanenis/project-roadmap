import OutlineButton from "../components/Outline-button";
import PrimaryButton from "../components/Primary-button";
import Navigation from "../components/Navigation";
import Navbutton from "../components/Navbutton";

export default {
  title: "Buttons",
};

export const Primary = () => <PrimaryButton>Save</PrimaryButton>;
export const Outline = () => <OutlineButton>Save</OutlineButton>;
export const NavigationButton = () => <Navbutton>Home</Navbutton>;
export const Nav = () => <Navigation></Navigation>;
