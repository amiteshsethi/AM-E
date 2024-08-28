import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

const NavigationButton = (props: Props) => {
  return (
    <Link 
    // className="navLink"
    to={props.to} 
    onClick={props.onClick}
    style={{ background: props.bg, color: props.textColor }}
    >
      <Button variant="contained" >
        {props.text}
      </Button>
    </Link>
  );
};

export default NavigationButton;
