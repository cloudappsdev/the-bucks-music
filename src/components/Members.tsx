import React from "react";
import "./Members.scss";

const Members = () => {
  return (
    <>
      <div>
        <h2>Members:</h2>
        <div className="innerBrd">
          <div>
            <table className="mtbl">
              <tr className="mrow">
                <td>Neil</td>
                <td>on Vocals, Acoustic Guitar, Percussion</td>
              </tr>
              <tr className="mrow">
                <td>Larry</td>
                <td>on Bass</td>
              </tr>
              <tr className="mrow">
                <td>Tony</td>
                <td>on Lead Guitar</td>
              </tr>
              <tr className="mrow">
                <td>Chuck</td>
                <td>on Drums</td>
              </tr>
              <tr className="mrow">
                <td>RJ</td>
                <td>on Keyboards</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
