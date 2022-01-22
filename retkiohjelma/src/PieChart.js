import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const [tyypit, setTyypit] = useState(props.paikat);
  const [prosentit, setProsentit] = useState([]);
  const [render, setRender] = useState(false);

  // Päivittää tyypit
  useEffect(() => {
    setTyypit(poistaNaytaKaikkiVaihtoehto(props.paikat));
    laskeMaarat();
    setRender(true);
  }, [props.paikatMaakunnassa]);

  // Laskee paikkojen määrät
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
      laskeProsentit(maarat);
    });
  };

  // Poistaa 'Näytä kaikki' -vaihtoehdon listasta
  const poistaNaytaKaikkiVaihtoehto = (arr) => {
    arr.shift();
    return arr;
  };

  // Laskee prosenttiosuudet paikoista
  const laskeProsentit = (maarat) => {
    const paikkoja = props.paikatMaakunnassa[0].length;
    let pros = [];
    async function f() {
      pros = maarat.map((maara) => ((maara / paikkoja) * 100).toFixed());
    }

    f().then(() => {
      let listassaOnDataa = false;
      for (let m of maarat) {
        if (m > 0) {
          listassaOnDataa = true;
        }
      }

      if (listassaOnDataa) {
        setProsentit(pros);
      } else {
        setProsentit([100]);
      }
    });
  };

  // Palauttaa kaavion
  return (
    render && (
      <div className="piechart-wrapper">
        <h2>Prosenttia paikoista</h2>
        <Pie
          data={{
            labels: [...tyypit],
            datasets: [
              {
                label: "Prosenttia paikoista",
                data: [...prosentit],
                backgroundColor: [
                  "rgba(255, 0, 0, 0.8)",
                  "rgba(255, 100, 0, 0.8)",
                  "rgba(255, 200, 0, 0.8)",
                  "rgba(200, 255, 0, 0.8)",
                  "rgba(100, 255, 0, 0.8)",
                  "rgba(0, 255, 0, 0.8)",
                  "rgba(0, 255, 100, 0.8)",
                  "rgba(0, 255, 200, 0.8)",
                  "rgba(0, 200, 255, 0.8)",
                  "rgba(0, 100, 255, 0.8)",
                  "rgba(0, 0, 255, 0.8)",
                  "rgba(100, 0, 255, 0.8)",
                  "rgba(100, 150, 255, 0.8)",
                ],
              },
            ],
          }}
          options={{
            animation: {
              duration: 0,
            },
          }}
        ></Pie>
      </div>
    )
  );
}

export default PieChart;
