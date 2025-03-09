import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <br />
      <div>
        <h2>Booking Contacts:</h2>
        <div>
          <table className="ctbl">
            <tr className="crow">
              <td>Neil</td>
              <td>708-745-1194</td>
            </tr>
            <tr className="crow">
              <td>Larry</td>
              <td>630-709-0381</td>
            </tr>
            <tr className="crow">
              <td>RJ</td>
              <td>312-909-9332</td>
            </tr>
            <tr className="crow">
              <td>RJ</td>
              <td>Email: sw4inet@hotmail.com</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact;
