import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [veri, SetVeri] = useState();
  const [tarih, SetTarih] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => SetVeri(res.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri, tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-white text-center display-3 fw-semibold">
              TÜRKİYE COVİD-19 ARAMA MOTORU
            </h2>

            <input
              type="text"
              placeholder="GG/AA/YY şeklinde giriniz."
              className="form-control text-center mt-4"
              onChange={(e) => SetTarih(e.target.value)}
            />
            <br />
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr class="fw-semibold text-center">
                  <th scope="row">1</th>
                  <td>
                    {veri === undefined ? "Veri Bekleniyor." : veri.totalTests}{" "}
                  </td>
                  <td>
                    {veri === undefined
                      ? "Veri Bekleniyor."
                      : veri.totalPatients}
                  </td>
                  <td>
                    {veri === undefined ? "Veri Bekleniyor." : veri.totalDeaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

