import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 mt-10 w-full border container mx-auto rounded-2xl shadow flex items-center  justify-center gap-5">
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Header;
