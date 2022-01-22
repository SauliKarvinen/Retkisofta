import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

// Barchart komponentti
function BarChart(props) {
  const [tyypit, setTyypit] = useState(props.tyypit);
  const [tyyppimaarat, setTyyppimaarat] = useState([]);

  useEffect(() => {
    laskeMaarat();
  }, [props.paikatMaakunnassa]);

  useEffect(() => {
    setTyypit(poistaNaytaKaikkiVaihtoehto(props.tyypit));
  }, [props.tyypit]);

  const poistaNaytaKaikkiVaihtoehto = (arr) => {
    // Poistaa "'Näytä kaikki' -vaihdoehdon" listasta
    arr.shift();
    return arr;
  };

  // Laskee kaikkien paikkojen määrät BarChartiin
  const laskeMaarat = () => {
    let laavut = 0;
    let kodat = 0;
    let paivatuvat = 0;
    let nuotiopaikat = 0;
    let luolat = 0;
    let auotiotuvat = 0;
    let ruokailukatokset = 0;
    let nahtavyydet = 0;
    let lintutornit = 0;
    let varaustuvat = 0;
    let kammit = 0;
    let porokampat = 0;
    let lahteet = 0;
    let maarat = [];

    async function f() {
      for (let paikka of props.paikatMaakunnassa[0]) {
        switch (paikka.tyyppi) {
          case "Laavu":
            laavut++;
            break;
          case "Kota":
            kodat++;
            break;
          case "Päivätupa":
            paivatuvat++;
            break;
          case "Nuotiopaikka":
            nuotiopaikat++;
            break;
          case "Luola":
            luolat++;
            break;
          case "Autiotupa":
            auotiotuvat++;
            break;
          case "Ruokailukatos":
            ruokailukatokset++;
            break;
          case "Nähtävyys":
            nahtavyydet++;
            break;
          case "Lintutorni":
            lintutornit++;
            break;
          case "Varaustupa":
            varaustuvat++;
            break;
          case "Kammi":
            kammit++;
            break;
          case "Porokämppä":
            porokampat++;
            break;
          case "Lähde":
            lahteet++;
            break;

          default:
            break;
        }
      }
    }

    f().then(() => {
      maarat = [
        laavut,
        kodat,
        paivatuvat,
        nuotiopaikat,
        luolat,
        auotiotuvat,
        ruokailukatokset,
        nahtavyydet,
        lintutornit,
        varaustuvat,
        kammit,
        porokampat,
        lahteet,
      ];
      setTyyppimaarat(maarat);
    });
  };

  // Palauttaa kaavion
  return (
    <div className="charts-wrapper">
      <div className="barchart-wrapper">
        <Bar
          data={{
            labels: [...tyypit],
            datasets: [
              {
                label: "Paikkoja yhteensä",
                data: [...tyyppimaarat],
                backgroundColor: [
                  "rgba(255, 0, 0, 0.8)",
                  "rgba(255, 50, 0, 0.8)",
                  "rgba(255, 100, 0, 0.8)",
                  "rgba(255, 150, 0, 0.8)",
                  "rgba(255, 200, 0, 0.8)",
                  "rgba(255, 250, 0, 0.8)",
                  "rgba(200, 255, 0, 0.8)",
                  "rgba(150, 255, 0, 0.8)",
                  "rgba(100, 255, 0, 0.8)",
                  "rgba(50, 255, 0, 0.8)",
                  "rgba(0, 255, 0, 0.8)",
                  "rgba(0, 255, 50, 0.8)",
                  "rgba(0, 255, 100, 0.8)",
                ],
              },
            ],
          }}
          options={{
            animation: {
              duration: 0,
            },
          }}
        ></Bar>
      </div>
    </div>
  );
}

export default BarChart;
