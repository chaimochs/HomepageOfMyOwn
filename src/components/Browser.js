import React, { useEffect, useState } from "react";

const Browser = () => {
  const [url, setUrl] = useState("");
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const openWindow = () => {
    window.open(url, "test", params);
  };
  let params = `location=yes,height=720px,width=1152px,top=960,left=480,scrollbars=yes,status=yes`;

  return (
    <div>
      <input
        type="url"
        placeholder="enter url"
        value={url}
        onChange={(e) => handleUrl(e)}
      />
      <button onClick={openWindow}></button>
    </div>
  );
};

export default Browser;
