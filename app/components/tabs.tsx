"use client";
import { useState } from "react";
import { data } from "../data";
import Card from "./card";
import Filter from "./filter";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [cardData, setCardData] = useState<any>();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName == "yours") {
      const filteredData = data.filter((item) => item.owner_id === 1);
      setCardData([...filteredData]);
    } else if (tabName == "blocked") {
      const filteredData = data.filter((item) => item.owner_id === 2);
      setCardData([...filteredData]);
    } else setCardData([...data]);
  };

  return (
    <>
      <div className="max-w-md mx-12">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "all"
                ? " text-black text-lg underline decoration-pink-500"
                : "text-zinc-400 text-base"
            }`}
            onClick={() => handleTabClick("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-l ${
              activeTab === "yours"
                ? " text-black text-lg underline decoration-pink-500"
                : "text-zinc-400 text-base"
            }`}
            onClick={() => handleTabClick("yours")}
          >
            Yours
          </button>

          <button
            className={`px-4 py-2 rounded-r ${
              activeTab === "blocked"
                ? " text-black text-lg underline decoration-pink-500"
                : "text-zinc-400 text-base"
            }`}
            onClick={() => handleTabClick("blocked")}
          >
            Blocked
          </button>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-8">
        <Filter data={cardData} />
      </div>
    </>
  );
};

export default Tabs;
