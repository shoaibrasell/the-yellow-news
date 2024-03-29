import { rule } from "postcss";
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    // pauseOnHover={true}
    <div className="flex">
      <button className="btn btn-accent">Breaking News</button>
      <Marquee className="text-xl" speed={150}>
        <Link className="mr-16" to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...</Link>
        <Link className="mr-16" to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...</Link>
        <Link className="mr-16" to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
