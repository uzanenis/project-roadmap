import OutlineButton from "../components/Outline-button";
import PrimaryButton from "../components/Primary-button";
import Navigation from "../components/Navigation";
import NavButton from "../components/Nav-button";

export default {
  title: "Buttons",
};

export const Primary = () => <PrimaryButton>Save</PrimaryButton>;
export const Outline = () => <OutlineButton>Save</OutlineButton>;
export const NavigationButton = () => <NavButton>Home</NavButton>;
export const Nav = () => <Navigation></Navigation>;
