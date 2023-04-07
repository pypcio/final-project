import React from "react";

export default function ImageLinkForm({ handleUrl, handleData, newData }) {
  return (
    <div>
      <p className="f3 fw5">
        The magical brain will detect any face on your picture. Let's try!
      </p>
      <form onSubmit={handleUrl}>
        <input
          value={newData}
          className="tc f5 pa2 w-70"
          placeholder="paste url"
          onChange={handleData}
        />
        <div>
          <button
            className="w-20 grow f5 link ph3 pv2 dib white bg-light-purple br3"
            type="submit"
          >
            Detect
          </button>
        </div>
      </form>
    </div>
  );
}
