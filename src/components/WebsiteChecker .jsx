import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDeviceWidth, setDeviceWidth } from "../features/deviceSlice";
import { setWebsiteUrl, selectWebsiteUrl } from "../features/websiteSlice";

const WebsiteChecker = () => {
  const dispatch = useDispatch();
  const websiteUrl = useSelector(selectWebsiteUrl);
  const deviceWidth = useSelector(selectDeviceWidth); // Add this line
  const [iframeUrl, setIframeUrl] = useState("");
 

  const handleUrlChange = (e) => {
    dispatch(setWebsiteUrl(e.target.value));
  };

  const handleWidthChange = (newWidth) => {
    dispatch(setDeviceWidth(newWidth));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIframeUrl(websiteUrl);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="border p-4 bg-white">
        {/* Phone mockup */}
        {/* <div className="border p-4 m-4 bg-gray-300 rounded-md shadow-md">
          <div className="w-40 h-80 bg-black relative">
            <div className="w-2 h-10 bg-gray-300 absolute left-1/2 top-1 transform -translate-x-1/2"></div>
            <div className="w-8 h-8 bg-red-500 absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
              
            </div>
          </div>
        </div> */}

        {/* Window mockup */}
        {/* <div className="border p-4 m-4 bg-gray-300 rounded-md shadow-md">
          <div className="w-96 h-64 bg-white relative overflow-hidden">
            <div className="w-2 h-full bg-gray-300 absolute left-1/2 top-1 transform -translate-x-1/2"></div>
            <div className="w-8 h-8 bg-red-500 absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </div>
        </div> */}

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="websiteUrl">Website URL:</label>
          <input
            id="websiteUrl"
            type="text"
            value={websiteUrl}
            onChange={handleUrlChange}
            placeholder="Enter a website URL"
            className="border p-2 m-2"
          />
          {/* <label htmlFor="deviceWidth">Device Width:</label>
          <input
            id="deviceWidth"
            type="number"
            value={deviceWidth}
            onChange={(e) => handleWidthChange(Number(e.target.value))}
            className="border p-2 m-2"
          /> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Check
          </button>
        </form>

        <div className="p-10 m-10 flex flex-col items-center">
          {/* mobile portrtait */}
          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "375px", height: "685px" }}
              ></iframe>
            </div>
          )}

          {/* mobile landscape */}

          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "734px", height: "375px" }}
              ></iframe>
            </div>
          )}

          {/* big mobile portraite */}

          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "412px", height: "660px" }}
              ></iframe>
            </div>
          )}

          {/* big mobile landscape */}

          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "684px", height: "390px" }}
              ></iframe>
            </div>
          )}

          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "770px", height: "930px" }}
              ></iframe>
            </div>
          )}

          {iframeUrl && (
            <div className="mt-8">
              <iframe
                src={iframeUrl}
                title="Responsive Website Checker"
                style={{ width: "1024px", height: "675px" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteChecker;
