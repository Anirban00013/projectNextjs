import React from "react";

const Home = () => {
  return (
    <div>
      <section className="p-5">
        <h3 className="align ">Attendence Table</h3>
        <div className="">
          <table className="table">
            <thead className="tab">
              <tr className="">
                <th>Date</th>
                <th> Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-title="Date">07/08/2000</td>
                <td data-title="Name">Shihab</td>
                <td data-title="status">Present</td>
              </tr>
              <tr>
                <td data-title="Date">09/05/1998</td>
                <td data-title="Name">Anirban</td>
                <td data-title="Status">Present</td>
              </tr>
              <tr>
                <td data-title="Date">09/09/1978</td>
                <td data-title="Name">partho</td>
                <td data-title="Status">Absent</td>
              </tr>
              <tr>
                <td data-title="Date">01/05/1999</td>
                <td data-title="Name">Anik</td>
                <td data-title="Status">Absent</td>
              </tr>
              <tr>
                <td data-title="Date">30/08/2008</td>
                <td data-title=" Name">Seema</td>
                <td data-title="Status">Present</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
