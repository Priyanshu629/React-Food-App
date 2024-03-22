import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {

 const  userData = useSelector((store) => store.user.items);

 const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className=" w-[100%] bg-pink-200 shadow-lg flex justify-between p-4 items-center border  border-black">
      <div className="">
        <img src={LOGO_URL} alt="" className="w-28 border rounded-[50%]" />
      </div>
      <div className="">
        <ul className="flex">
          <li className="mx-3 text-[20px] font-semibold text-orange-800 "><Link to={`/`} className="">Home</Link></li>
          <li className="mx-3 text-[20px] font-semibold text-orange-800" > <Link to={`/about`} className="">About</Link></li>
          <li className="mx-3 text-[20px] font-bold text-orange-800"><Link to={'/cart'}>Cart({cartItems.length})</Link></li>
          {!userData.loggedin? (<li className="bg-blue-300 px-4 py-2 mx-2 rounded-lg"><Link to="/login">Login</Link></li>) : (<li className="mx-3 text-[20px] font-semibold text-green-600"><Link to={'/login'}>{userData.username}</Link></li>)}
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
