import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

export default function CareScale({ careType, scaleValue }) {
  const valueLorW = {
    1: "peu",
    2: "moderer",
    3: "beaucoup",
  };
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="Sun-logo" />
    ) : (
      <img src={Water} alt="Water-logp" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${valueLorW[scaleValue]} ${
            careType === "light" ? "de lumiere ☀️" : "d'arrosage 💧"
          }`
        )
      }
    >
      {range.map((ranngeElem) =>
        scaleValue >= ranngeElem ? (
          <span key={ranngeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
