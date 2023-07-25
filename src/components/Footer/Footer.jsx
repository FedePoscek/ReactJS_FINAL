import "./Footer.css";

const Footer = ({ alumno, curso }) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <strong> {alumno} </strong> - {curso}
      </footer>
    </div>
  );
};

export default Footer;
