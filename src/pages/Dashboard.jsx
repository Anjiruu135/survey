import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Dashboard() {
  const [selectedData, setSelectedData] = useState("Governor");
  const [selectedMunicipality, setSelectedMunicipality] = useState("Diplahan");

  const barDataGovernors = {
    labels: [
      "Diplahan",
      "Buug",
      "Olutanga",
      "Alicia",
      "Talusan",
      "Mabuhay",
      "Payao",
      "Imelda",
      "Malangas",
    ],
    datasets: [
      {
        label: "Hofer",
        data: [165, 426, 351, 348, 243, 336, 381, 537, 645],
        backgroundColor: "rgba(50, 162, 235, 0.9)",
      },
      {
        label: "Palma",
        data: [696, 593, 306, 581, 137, 151, 479, 459, 621],
        backgroundColor: "rgba(255, 99, 45, 0.9)",
      },
    ],
  };

  const barDataCongressman = {
    labels: [
      "Diplahan",
      "Buug",
      "Olutanga",
      "Alicia",
      "Talusan",
      "Mabuhay",
      "Payao",
      "Imelda",
      "Malangas",
    ],
    datasets: [
      {
        label: "Bancoro",
        data: [146, 374, 338, 387, 331, 384, 376, 248, 775],
        backgroundColor: "rgba(34, 167, 240, 0.9)",
      },
      {
        label: "Palma",
        data: [684, 652, 320, 542, 118, 278, 519, 537, 645],
        backgroundColor: "rgba(225, 75, 49, 0.9)",
      },
    ],
  };

  const pieDataDiplahan = {
    labels: ["Jore", "Palma"],
    datasets: [
      {
        label: "Votes",
        data: [110, 704],
        backgroundColor: ["rgba(255, 99, 45, 1)", "rgba(54, 162, 235, 1)"],
      },
    ],
  };

  const pieDataBuug = {
    labels: ["Corderillo", "Lagas"],
    datasets: [
      {
        label: "Votes",
        data: [245, 704],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataOlutanga = {
    labels: ["Gumba", "Ruste"],
    datasets: [
      {
        label: "Votes",
        data: [293, 376],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataAlicia = {
    labels: ["Laja", "Musa"],
    datasets: [
      {
        label: "Votes",
        data: [257, 611],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataTalusan = {
    labels: ["Yuatan", "Edem"],
    datasets: [
      {
        label: "Votes",
        data: [117, 269],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataMabuhay = {
    labels: ["Toremotcha", "Calonge"],
    datasets: [
      {
        label: "Votes",
        data: [107, 356],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataPayao = {
    labels: ["Acosta", "Mendoza"],
    datasets: [
      {
        label: "Votes",
        data: [145, 714],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataImelda = {
    labels: ["Famor", "Silva"],
    datasets: [
      {
        label: "Votes",
        data: [230, 511],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const pieDataMalangas = {
    labels: ["Saavedra", "Yambao"],
    datasets: [
      {
        label: "Votes",
        data: [551, 812],
        backgroundColor: ["rgba(255, 99, 45, 0.9)", "rgba(54, 162, 235, 0.9)"],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          size: 14,
        },
        display: true,
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };
  

const getTotalVotesByMunicipality = (barData) => {
  const totalVotes = {};
  const { labels, datasets } = barData;

  labels.forEach((label) => {
    totalVotes[label] = 0;
  });

  datasets.forEach((dataset) => {
    dataset.data.forEach((value, index) => {
      totalVotes[labels[index]] += value;
    });
  });

  return totalVotes;
};

const totalVotesGovernors = getTotalVotesByMunicipality(barDataGovernors);
const totalVotesCongressman = getTotalVotesByMunicipality(barDataCongressman);

const barOptionsGov = {
  scales: {
    y: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    datalabels: {
      color: "#000",
      anchor: "end",
      align: "end",
      formatter: (value, context) => {
        const municipality = context.chart.data.labels[context.dataIndex];
        const total = context.chart.data.datasets.reduce((sum, dataset) => {
          return sum + dataset.data[context.dataIndex];
        }, 0);

        const percentage = ((value / totalVotesGovernors[municipality]) * 100).toFixed(2);
        return `${percentage}%`;
      },
      font: {
        size: 10,
        weight: "bold",
      },
    },
  },
};

const barOptionsCong = {
  scales: {
    y: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    datalabels: {
      color: "#000",
      anchor: "end",
      align: "end",
      formatter: (value, context) => {
        const municipality = context.chart.data.labels[context.dataIndex];
        const total = context.chart.data.datasets.reduce((sum, dataset) => {
          return sum + dataset.data[context.dataIndex];
        }, 0);

        const percentage = ((value / totalVotesCongressman[municipality]) * 100).toFixed(2);
        return `${percentage}%`;
      },
      font: {
        size: 10,
        weight: "bold",
      },
    },
  },
};

  

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="row justify-content-center">
        <div className="col-md-3">
          <label htmlFor="dataSelect">Select Data:</label>
          <select
            id="dataSelect"
            className="form-select"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
          >
            <option value="Governor">Governor</option>
            <option value="Congressman">Congressman</option>
            <option value="Mayor">Mayor</option>
          </select>
        </div>
      </div>

      {selectedData === "Governor" && (
        <div className="row justify-content-center mt-4">
          <h3>Governors</h3>
          <div className="col-md-8">
            <Bar data={barDataGovernors} options={barOptionsGov} />
          </div>
        </div>
      )}

      {selectedData === "Congressman" && (
        <div className="row justify-content-center mt-4">
          <h3>Congressman</h3>
          <div className="col-md-8">
            <Bar data={barDataCongressman} options={barOptionsCong} />
          </div>
        </div>
      )}

      {selectedData === "Mayor" && (
        <div className="row justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <label htmlFor="munSelect">Select Municipality:</label>
              <select
                id="munSelect"
                className="form-select"
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
              >
                <option value="Diplahan">Diplahan</option>
                <option value="Buug">Buug</option>
                <option value="Olutanga">Olutanga</option>
                <option value="Alicia">Alicia</option>
                <option value="Talusan">Talusan</option>
                <option value="Mabuhay">Mabuhay</option>
                <option value="Payao">Payao</option>
                <option value="Imelda">Imelda</option>
                <option value="Malangas">Malangas</option>
              </select>
            </div>
          </div>

          <h3 className="mt-3">Mayor</h3>

          {selectedMunicipality === "Diplahan" && (
            <div className="col-md-4">
              <h4>Diplahan</h4>
              <Pie data={pieDataDiplahan} options={options} />
            </div>
          )}

          {selectedMunicipality === "Buug" && (
            <div className="col-md-4">
              <h4>Buug</h4>
              <Pie data={pieDataBuug} options={options} />
            </div>
          )}

          {selectedMunicipality === "Olutanga" && (
            <div className="col-md-4">
              <h4>Olutanga</h4>
              <Pie data={pieDataOlutanga} options={options} />
            </div>
          )}

          {selectedMunicipality === "Alicia" && (
            <div className="col-md-4">
              <h4>Alicia</h4>
              <Pie data={pieDataAlicia} options={options} />
            </div>
          )}

          {selectedMunicipality === "Talusan" && (
            <div className="col-md-4">
              <h4>Talusan</h4>
              <Pie data={pieDataTalusan} options={options} />
            </div>
          )}

          {selectedMunicipality === "Mabuhay" && (
            <div className="col-md-4">
              <h4>Mabuhay</h4>
              <Pie data={pieDataMabuhay} options={options} />
            </div>
          )}

          {selectedMunicipality === "Payao" && (
            <div className="col-md-4">
              <h4>Payao</h4>
              <Pie data={pieDataPayao} options={options} />
            </div>
          )}

          {selectedMunicipality === "Imelda" && (
            <div className="col-md-4">
              <h4>Imelda</h4>
              <Pie data={pieDataImelda} options={options} />
            </div>
          )}

          {selectedMunicipality === "Malangas" && (
            <div className="col-md-4">
              <h4>Malangas</h4>
              <Pie data={pieDataMalangas} options={options} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
