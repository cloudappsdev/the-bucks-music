import "./Shows.scss";

const Shows = () => {
  return (
    <>
      <br />
      <div>
        <div className="space-out tborder">
          <span className="h2-alt">Upcoming Shows</span>
          <button className="showButton">Show the Band Events Page</button>
        </div>
        <div>
          <table className="ctbl">
            <tr className="crow">
              <td>St. Cletus</td>
              <td>LaGrange</td>
              <td>April-27</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Shows;
