import React from "react";

import Search from "../Component/Search";
import Profile from "../Component/Profile";
import Details from "../Component/Details";

 function Home() {
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
            <div className="col">
                < Search />
            </div>
        </div>
        < br />
        <div className="row">
            <div className="col-4">
                <Profile />
            </div>
            <div className="col-8">
                <Details />
            </div>
        </div>
      </div>
    </div>
  )
}
export default Home;