"use client";

import Image from "next/image";

const Card = ({ data }: { data: any[] }) => {
  //   console.log(data);
  if (!data) {
    return null; // Return null or handle the case when data is undefined
  }
  console.log(data);
  return (
    <div className="flex justify-start w-full flex-wrap">
      {data.map((item: any, ind: number) => {
        return (
          <div
            key={ind}
            className="max-w-md mx-5 bg-white rounded-sm shadow-md overflow-hidden px-4 my-5 w-80"
          >
            <div className="pt-4">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">Memberfive . Budget</p>
                </div>

                <div className="flex-shrink-0">
                  {item.card_type == "burner" ? (
                    <Image
                      src="/icon-fire.png"
                      alt="refresh-image"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/icon-refresh.png"
                      alt="refresh-image"
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <div className="border-t border-gray-200"> */}
            <div className="grid grid-cols-3">
              <div className=" py-3">
                <p className="text-sm font-medium text-gray-500">Amount</p>
                <p className="text-lg font-semibold text-gray-900">
                  {item.limit}
                </p>
              </div>
              <div className=" py-3">
                <p className="text-sm font-medium text-gray-500">Frequency</p>
                <p className="text-lg font-semibold text-gray-900">Monthly</p>
              </div>
              <div className=" py-3">
                <p className="text-sm font-medium text-gray-500">Expiry</p>
                <p className="text-lg font-semibold text-gray-900">
                  {item.expiry}
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="">
              <div className="bg-blue-200 h-4">
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between py-1 pt-2">
              <p className="text-sm text-gray-500">Card Subheading</p>
              <p className="text-sm text-gray-500">7890 SGD</p>
            </div>
            <div className="flex justify-between py-1 pb-4">
              <p className="text-sm text-gray-500">Card Subheading</p>
              <p className="text-sm text-gray-500">7890 SGD</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
