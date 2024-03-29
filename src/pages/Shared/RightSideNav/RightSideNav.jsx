import React from "react";
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-2 space-y-2 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline btn-secondary w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline btn-accent w-full">
        <FaFacebook></FaFacebook>
        Facebook
      </button>
      </div>

      <div className="p-2 space-y-2 mb-6">
        <h2 className="text-3xl">Find Us on</h2>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
          <FaFacebook></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
          <FaTwitter></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
         <FaInstagram></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/*  q zone   */}
      <div className="p-2 space-y-2 mb-6 pb-4">
        <h2 className="text-3xl">Q Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
      <div className="p-2 space-y-2 mb-6 text-center bg-violet-800 rounded">
        <h2 className="text-3xl pb-6 text-white">Create an Amazing Newspaper</h2>
       <span className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</span>
       <button className="btn btn-info">Learn more</button>
      </div>
    </div>
  );
};

export default RightSideNav;
