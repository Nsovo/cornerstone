import logo from '../assets/cornerstone-logo.png';

export function Footer() {
  return (
    <footer>
      <img src={logo} alt="Cornerstone" />
      <p>Cornerstone Open Portal Network · Loving You.</p>
      <p>© {new Date().getFullYear()} Cornerstone</p>
    </footer>
  );
}