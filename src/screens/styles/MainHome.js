import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/image/bg.jpg";
export const mainHomeStyles = makeStyles({
  root: {
    height: "30vh",
    display: "flex",
    color: "white !important",
    background: "rgb(33,93,195)",
    background:
      "linear-gradient(90deg, rgb(214 214 214 / 66%) 49%, rgb(124 125 125) 100%)",
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
