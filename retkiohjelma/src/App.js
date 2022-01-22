import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Map from "./Map";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { BeatLoader } from "react-spinners";


// Tulikartta API
const API_URL = "https://tulikartta.fi/api-json2.php";

function App() {
  const [paikat, setPaikat] = useState([]);
  const [maakunnat, setMaakunnat] = useState([]);
  const [tyypit, setTyypit] = useState([]);
  const [valittuMaakunta, setValittuMaakunta] = useState("");
  const [valittuTyyppi, setValittuTyyppi] = useState("");
  const [rajatutPaikat, setRajatutPaikat] = useState([]);
  const [paikatMaakunnassa, setPaikatMaakunnassa] = useState([]);
  const [newLat, setNewLat] = useState();
  const [newLong, setNewLong] = useState();
  const [toggleMaakunnatClick, setToggleMaakunnatClick] = useState(false);
  const [toggleTyypitClick, setToggleTyypitClick] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Maakunnat -valikon dropdown animaatio
  const maakunnatFade = useSpring({
    position: "absolute",
    border: toggleMaakunnatClick ? 1 : 0,
    height: toggleMaakunnatClick ? 100 : 0,
    width: 200,
  });

  // Tyypit -valikon dropdown animaatio
  const tyypitFade = useSpring({
    position: "absolute",
    border: toggleTyypitClick ? 1 : 0,
    height: toggleTyypitClick ? 100 : 0,
    width: 200,
  });

  // Sivun latautuessa haetaan data
  useEffect(() => {
    fetch(API_URL, {
      "Content-Type": "application/json",
      Accept: "application/json",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        const paikatArr = [...jsonData];
        const maakunnatArr = [];
        const tyypitArr = [];

        tyypitArr.push("Näytä kaikki");

        for (let i of paikatArr) {
          maakunnatArr.push(i.maakunta);
          tyypitArr.push(i.tyyppi);
        }
        const maakunnatRemoveDuplicates = [...new Set(maakunnatArr)];
        const tyypitRemoveDublicates = [...new Set(tyypitArr)];

        setPaikat([...jsonData]);
        setMaakunnat([...maakunnatRemoveDuplicates]);
        setTyypit([...tyypitRemoveDublicates]);
        setIsLoading(false);
      });
  }, []);

  // Päivitetään paikat valitussa maakunnassa kun valitaan maakunta
  useEffect(() => {
    paivitaPaikatMaakunnassa();
    paivitaChartData();
    return () => {};
  }, [valittuMaakunta]);

  // Päivitetään kaikki paikat kun valitaan tyyppi
  useEffect(() => {
    paivitaPaikat();
  }, [valittuTyyppi]);

  // Päivittää kaavioille lähetettävän datan
  const paivitaChartData = () => {
    const chartDataArr = paikat.filter(
      (paikka) => paikka.maakunta == valittuMaakunta
    );

    setChartData([chartDataArr]);
  };

  // Päivittää paikat valitussa maakunnassa
  const paivitaPaikatMaakunnassa = () => {
    let paikatMaakunnassaArr = [];

    if (valittuTyyppi == "Näytä kaikki" || valittuTyyppi == "") {
      paikatMaakunnassaArr = paikat.filter(
        (paikka) => paikka.maakunta == valittuMaakunta
      );
      setChartData([paikatMaakunnassaArr]);
    } else {
      paikatMaakunnassaArr = paikat.filter(
        (paikka) =>
          paikka.maakunta == valittuMaakunta && paikka.tyyppi == valittuTyyppi
      );
    }
    setPaikatMaakunnassa([paikatMaakunnassaArr]);
    setRajatutPaikat([paikatMaakunnassaArr]);

    if (valittuMaakunta != "" && paikatMaakunnassaArr[0]) {
      const splitKoordinaatit = paikatMaakunnassaArr[0].koordinaatti.split(",");
      setNewLat(splitKoordinaatit[0]);
      setNewLong(splitKoordinaatit[1]);
    }
  };

  // Päivittää kaikki paikat valitun maakunnan ja tyypin mukaan
  const paivitaPaikat = () => {
    if (valittuMaakunta != "" && valittuTyyppi != "Näytä kaikki") {
      let rajatutPaikat = [];
      async function f() {
        {
          rajatutPaikat = paikat.filter(
            (paikka) =>
              paikka.maakunta == valittuMaakunta &&
              paikka.tyyppi == valittuTyyppi
          );
        }
      }
      f().then(() => setRajatutPaikat([rajatutPaikat]));
    } else if (valittuTyyppi == "Näytä kaikki") {
      paivitaPaikatMaakunnassa();
    }
  };

  // Luo ja palauttaa maakunnat -dropvalikon
  const luoMaakuntaValikko = () => {
    let selectBox = document.getElementById("inputMaakunnat");
    const options = Object.values(maakunnat).map((maakunta, index) => (
      <p
        key={index}
        className="valinnat"
        onClick={(e) => {
          selectBox.value = e.target.innerHTML;
          setValittuMaakunta(e.target.innerHTML);
          selectBox.focus();
          setToggleMaakunnatClick(false);
        }}
      >
        {maakunta}
      </p>
    ));

    return (
      <animated.div
        style={maakunnatFade}
        id={"maakunnatContainer"}
        className="options"
      >
        {options}
      </animated.div>
    );
  };

  // Luo ja palauttaa tyypit -dropvalikon
  const luoTyypitValikko = () => {
    let selectBox = document.getElementById("inputTyypit");
    const options = Object.values(tyypit).map((tyyppi, index) => (
      <p
        key={index}
        className="valinnat"
        onClick={(e) => {
          selectBox.value = e.target.innerHTML;
          setValittuTyyppi(e.target.innerHTML);
          selectBox.focus();
          setToggleTyypitClick(false);
        }}
      >
        {tyyppi}
      </p>
    ));

    return (
      <animated.div
        style={tyypitFade}
        id={"tyypitContainer"}
        className="options"
      >
        {options}
      </animated.div>
    );
  };

  // Palauttaa ohjelman
  return (
    <div className="app-container">
      {!isLoading ? (
        <div>
          <input
            id={"inputMaakunnat"}
            type={"text"}
            value={valittuMaakunta}
            onClick={() => /* naytaMaakunnat() */ {
              /* setNaytaMaakuntaValikko(true); */
              setToggleMaakunnatClick(!toggleMaakunnatClick);
            }}
            placeholder={"Valitse maakunta"}
            readOnly
          ></input>
          {luoMaakuntaValikko()}

          <input
            id={"inputTyypit"}
            inputMode={"text"}
            value={valittuTyyppi}
            onClick={() => {
              setToggleTyypitClick(!toggleTyypitClick);
            }}
            placeholder={"Valitse tyyppi"}
            readOnly
          ></input>

          {luoTyypitValikko()}

          {maakunnat.length > 0 &&
            tyypit.length > 0 &&
            paikat &&
            rajatutPaikat && (
              <div className="map-chart-wrapper">
                <Map
                  className="map"
                  maakunta={valittuMaakunta}
                  tyyppi={valittuTyyppi}
                  kaikkiPaikat={[...paikatMaakunnassa]}
                  rajatutPaikat={[...rajatutPaikat]}
                  newLat={newLat}
                  newLong={newLong}
                ></Map>
                <div className="chart-wrapper">
                  <BarChart
                    tyypit={[...tyypit]}
                    paikatMaakunnassa={chartData}
                    rajatutPaikat={rajatutPaikat}
                  ></BarChart>

                  <PieChart
                    paikat={[...tyypit]}
                    paikatMaakunnassa={chartData}
                  ></PieChart>
                </div>
              </div>
            )}
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            top: 300,
            color: "white",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          <BeatLoader size={50} color="white" loading></BeatLoader>
          <br />
          Loading...
        </div>
      )}
    </div>
  );
}

export default App;
