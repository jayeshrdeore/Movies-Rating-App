import MainMenu from "./MainMenu";

function Userlogin(props) {
  if (props.name == "Jayesh" && props.password == "Jay@002") {
    return <MainMenu></MainMenu>;
  } else {
    return <h2>Please login</h2>;
  }
}
export default Userlogin;
