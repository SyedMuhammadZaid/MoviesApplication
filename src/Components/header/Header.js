import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./header.scss";
import movixLogo from "../../Assets/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBar from "../searchBar/Search";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [searchbar, setsearchbar] = useState(false);

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // scroll header effect handler
  const scrollHeaderHandler = () => {
    if(window?.scrollY > 200){
      setShow("hide")
      if(window.scrollY < lastScrollY){
        setShow("show")
      }
    } 
    else{
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  }

  // calling on each scroll for header.
  document.addEventListener('scroll',scrollHeaderHandler)

  // searchbar display and hide
  const searchBarHandler = () => {
    setsearchbar(!searchbar);
  };

  // navigating on the basis of menu we are receiving from the li elements down.
  const menuHandler = (menu) => {
    if (menu === "movie" || menu === "tv") {
      navigate(`/explore/${menu}`);
      setMobileMenu(false)
    }
  };

  return (
    <div className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper
        chlildren={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div className="logo" onClick={() => navigate('/')}>
              <img src={movixLogo} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexWrap: "nowrap",
              }}
            >
              <ul className="menuItems">
                <li className="menuItem" onClick={() => menuHandler("movie")}>
                  Movies
                </li>
                <li className="menuItem" onClick={() => menuHandler("tv")}>
                  Tv Shows
                </li>
                <li className="menuItem">
                  <AiOutlineSearch
                    size={18}
                    onClick={() => {
                      searchBarHandler();
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        }
      ></ContentWrapper>

      <div style={{}}>
        <div span={24}></div>
      </div>

      {searchbar ? (
        <SearchBar
          // onSearch={closeIconHandler}
          placeholder="Search for a Tv or Movie Show ..."
        />
      ) : (
        ""
      )}

      <div className="mobileMenuItems">
        <AiOutlineSearch
          onClick={() => {
            searchBarHandler();
          }}
        />
        {mobileMenu ? (
          <AiOutlineClose onClick={() => setMobileMenu(false)} />
        ) : (
          <SlMenu onClick={() => setMobileMenu(true)} />
        )}
      </div>
    </div>
  );
};

export default Header;
