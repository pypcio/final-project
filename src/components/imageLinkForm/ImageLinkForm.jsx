import React from "react";
import "../../styles/ImageLinkForm.css";
export default function ImageLinkForm({ handleUrl, handleData, newData }) {
  return (
    <div>
      <p className="f3 fw5">
        The magical brain will detect any face on your picture. Let's try!
      </p>
      <div className="center shadow-5 pa3 m5 formstyle">
        <form onSubmit={handleUrl} className="w-70">
          <input
            value={newData}
            className="tc f5 pa2 w-70 br1 shadow-5"
            placeholder="paste url"
            onChange={handleData}
          />
          <div>
            <button
              className=" grow f5 link ph3 pv2 dib white bg-light-purple br1 shadow-5 ba b--gray"
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
