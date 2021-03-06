import React, { Component } from "react";
import ItemBuah from "./ItemBuah";

class DaftarBuah extends Component {
  render() {
    let dataHargaBuah = [
      { nama: "Semangka", harga: 10000, berat: 1000 },
      { nama: "Anggur", harga: 40000, berat: 500 },
      { nama: "Strawberry", harga: 30000, berat: 400 },
      { nama: "Jeruk", harga: 30000, berat: 1000 },
      { nama: "Mangga", harga: 30000, berat: 500 },
    ];

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            {dataHargaBuah.map((el, index) => {
              return (
                <>
                  <ItemBuah item={el} key={index} />
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default DaftarBuah;
