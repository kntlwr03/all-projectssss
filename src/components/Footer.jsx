const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <p>CopyRight @ {currYear}</p>
    </footer>
  );
}

export default Footer;
