import React from "react";
import Navbar from "../../components/Navbar";
import AppSidebar from "../../components/appElements/AppSidebar";
import Searchbar from "../../components/appElements/Searchbar";
import EmailContent from "../../components/appElements/EmailContent";
import { useSelector } from "react-redux";
import TrashContent from "../../components/appElements/TrashContent";

const Email = () => {
  const pageName = useSelector((state) => state.app.pageName);
  return (
    <div>
      <Navbar />
      <p className="text-[#35446f] text-xl font-semibold ml-5 mt-5">Email</p>
      <div className="grid max-[1200px]:grid-cols-1 appGrid">
        <div className="mt-5 ml-5">
          <AppSidebar />
        </div>
        <div className="mt-5 mr-5">
          <Searchbar />

          {pageName === "trash" && <TrashContent />}
          {pageName === "users" && <EmailContent />}
        </div>
      </div>
    </div>
  );
};

export default Email;
