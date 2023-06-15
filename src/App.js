function App() {
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
                <tr class="fw-semibold text-center ">
                  <th scope="row">1</th>
                  <td>12500</td>
                  <td>2200</td>
                  <td>17</td>
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
