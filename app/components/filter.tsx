import React, { useEffect, useState } from "react";
import Card from "./card";

const Filter = ({ data }: { data: any[] }) => {
  //   console.log(data);
  const [filteredData, setFilteredData] = useState<any>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (event: any) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().startsWith(searchValue)
    );
    setFilteredData(filtered);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
        className="px-2 ml-6 py-1 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-800 w-80"
      />
      <Card data={filteredData} />;
    </div>
  );
};

export default Filter;
