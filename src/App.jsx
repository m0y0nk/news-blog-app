import { useState } from "react";
import News from "./components/News.jsx";
import Header from "./components/Header.jsx";
import NewsCategory from "./components/news/NewsCategory.jsx";
import { Button } from "@/components/ui/button";
import BlogProfile from "./components/BlogProfile.jsx";
import NewsPlaceholder from "./components/news/NewsPlaceholder.jsx";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white-light flex flex-col">
        <Header />

        <div className="flex flex-row">
          <div className="min-w-32">
            <div className="flex flex-col  bg-white-darker m-4 rounded-md min-h-32  justify-center items-center">
              <BlogProfile />
            </div>
            {/* News Category */}
            <div className="flex flex-col  bg-white-darker m-4 rounded-md min-h-32 justify-center items-center">
              <NewsCategory />
            </div>
          </div>

          <div className="w-150">
            <div className=" bg-white-darker my-4 rounded-md object-cover">
                {/* Star News */}
                gfsd
            </div>
            <div className="object-cover bg-white-darker">
                {/* News Listing */}
                <NewsPlaceholder />
            </div>
          </div>

          <div>{/* My Blogs */}</div>

          <div>
            <div>{/* Location Picker */}</div>
            <div>{/* Calendar */}</div>
          </div>
        </div>

        <div className="footer flex flex-row justify-between px-3 bg-white-darker text-white-light">
          <div>NEWS & BLOGS APP</div>
          <div>All rights reserved !</div>
        </div>

        <div>Blog-News App</div>
        <div>
          <div>My name is Mayank Soni</div>
          <div className="font-playfair">My name is Mayank Soni</div>
          <div className="font-outfit">My name is Mayank Soni</div>
          <div className="font-nunito">My name is Mayank Soni</div>
        </div>
      </div>
    </>
  );
}

export default App;
