import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/image/bg.jpg";
export const mainHomeStyles = makeStyles({
  root: {
    height: "80vh",
    display: "flex",
    color: "white",
  },

  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },
  textWhite: {
    color: "white",
  },
});
