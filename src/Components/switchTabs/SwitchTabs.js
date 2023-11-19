import React, { useState } from "react";
import "./switchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [left, setleft] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabHandler = (tab, index) => {
    const settingLeft = index * 100;
    setleft(settingLeft);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);

    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""}`}
              onClick={() => tabHandler(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left: left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
