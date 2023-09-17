import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Calculator = () => {
  const [area, setArea] = useState("");
  const [tileSizeHorizontal, setTileSizeHorizontal] = useState("");
  const [tileSizeVertical, setTileSizeVertical] = useState("");
  const [result, setResult] = useState("");
  const [totalSacks, setTotalSacks] = useState("");

  const calculateAmounts = () => {
    const areaFloat = parseFloat(area);
    const tileSizeHorizontalFloat = parseFloat(tileSizeHorizontal);
    const tileSizeVerticalFloat = parseFloat(tileSizeVertical);
    const totalArea = areaFloat * 1.1;
    const totalTiles = Math.ceil(totalArea / (tileSizeHorizontalFloat * tileSizeVerticalFloat));
    const totalGrout = Math.ceil(totalArea * 0.5); 
    const totalMortar = Math.ceil(totalArea * 4);
    const totalSacksValue = Math.ceil(totalMortar / 20);

    setResult(`Total de Azulejos: ${totalTiles}, Total de Rejunte: ${totalGrout}`);
    setTotalSacks(`Total de Sacos de Argamassa: ${totalSacksValue}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Calculadora de Azulejos</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="area" className="block text-gray-800 font-bold mb-2">
              Área (m²)
            </label>
            <input
              type="text"
              id="area"
              name="area"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Insira a área em metros quadrados"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tileSizeHorizontal" className="block text-gray-800 font-bold mb-2">
              Tamanho do Azulejo (Horizontal)
            </label>
            <input
              type="text"
              id="tileSizeHorizontal"
              name="tileSizeHorizontal"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Insira o tamanho do azulejo (horizontal)"
              value={tileSizeHorizontal}
              onChange={(e) => setTileSizeHorizontal(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tileSizeVertical" className="block text-gray-800 font-bold mb-2">
              Tamanho do Azulejo (Vertical)
            </label>
            <input
              type="text"
              id="tileSizeVertical"
              name="tileSizeVertical"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Insira o tamanho do azulejo (vertical)"
              value={tileSizeVertical}
              onChange={(e) => setTileSizeVertical(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
              onClick={calculateAmounts}
            >
              Calcular
            </button>
          </div>
        </form>
        {result && <p className="mt-4">{result}</p>}
        {totalSacks && <p className="mt-4">{totalSacks}</p>}
      </div>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById('root'));
