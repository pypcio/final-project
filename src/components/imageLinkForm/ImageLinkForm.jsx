import React from "react";
import "../../styles/ImageLinkForm.css";
export default function ImageLinkForm({ handleUrl, handleData, newData }) {
  return (
    <div>
      <p className="f5 fw8 white">
        The magical brain will detect any face on your picture. Let's try!
      </p>
      <div className="center shadow-5 pa3 m5 formstyle">
        <form onSubmit={handleUrl} className="pa2 form">
          <div className="w-100 center">
            <input
              value={newData}
              className=" w-100 tc center f6 br1 shadow-5 dib h-80"
              placeholder="paste url"
              onChange={handleData}
            />
            <button
              className=" tc w-auto grow f5 link ph3 dib white bg-gray br1 shadow-5 ba b--gray"
              type="submit"
            >
              Detect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
