import React from 'react';
import About from "../About/About";
import Latest from "../Latest/Latest";
import Users from "../Users/Users";
import Popular from "../Popular/Popular";
import CreatePost from "../CreatePost/CreatePost";

function Body({blocks}) {
  return (

      <div className="container mx-auto sm:px-6 lg:px-8 min-h-screen">{blocks.latest && <Latest />}
          {blocks.popular && <Popular />}
          {blocks.about && <About />}
          {blocks.users && <Users />}
          {blocks.post && <CreatePost />}
      </div>


  );
}

export default Body;
