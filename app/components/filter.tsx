import React, { useEffect, useState } from "react";
import Card from "./card";

const Filter = ({ data }: { data: any[] }) => {
  //   console.log(data);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [cardTypeFilter, setCardTypeFilter] = useState<string[]>([]);
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data, cardTypeFilter]);

  const handleSearch = (event: any) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().startsWith(searchValue)
    );
    setFilteredData(filtered);
  };

  const handleCardTypeChange = (event: any) => {
    const cardType = event.target.value;
    if (event.target.checked) {
      setCardTypeFilter([...cardTypeFilter, cardType]);
    } else {
      setCardTypeFilter(cardTypeFilter.filter((type) => type !== cardType));
    }
    let filtered = data;
    if (cardTypeFilter.length > 0) {
      filtered = filtered.filter((item: any) =>
        cardTypeFilter.includes(item.card_type)
      );
    }

    setFilteredData(filtered);
  };

  const handleFilterButtonClick = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
        className="px-2 ml-6 py-1 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-800 w-80"
      />
      <button
        onClick={handleFilterButtonClick}
        className="ml-6 mb-4 bg-gray-200 px-3 py-1 rounded-md text-gray-800"
      >
        Filter
      </button>
      {showFilterOptions && (
        <div className="ml-6 mb-4 text-black">
          <label>
            <input
              type="checkbox"
              value="burner"
              onChange={handleCardTypeChange}
            />
            Burner
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              value="subscription"
              onChange={handleCardTypeChange}
            />
            Subscription
          </label>
        </div>
      )}
      <Card data={filteredData} />;
    </div>
  );
};

export default Filter;
