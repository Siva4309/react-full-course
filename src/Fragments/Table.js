import React from "react";
import Column from "./Column";
function Table() {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <tbody>
        <tr>
          <Column />
        </tr>
       </tbody>
      </table>
    </div>
  );
}

export default Table;
