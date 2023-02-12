import "./ZoomIn.css";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";
ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function ZoomIn(property) {
  const [barData, setBarData] = useState({
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [3, 8, 6, 9, 7, 1, 2, 6, 7, 6, 2, 5],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          borderWidth: 1,
        },
      ],
    },

    options: {
      scales: {
        x: {
          grid: {
            display: false,
            fontColor: "white",
          },
        },
        y: {
          grid: {
            display: false,
            fontColor: "white",
          },
        },
      },
    },
  });

  const [doughnutData, setDoughnutData] = useState({
    data: {
      labels: ["Teching", "Devlopment", "Mangement"],
      datasets: [
        {
          label: "My First Dataset",
          data: [500, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    }});

  return (
    <div className="zoomIn">
      <div className="zoomIn__container">
        <img
          className="zoomIn__image"
          src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ="
          alt=""
          srcset=""
        />

        <div className="zoomIn__info">
          <div className="zoomIn__name">{property.name}</div>

          <div className="zoomIn__designation">
            <span>{property.designation}</span>
            <span>Teaching</span>
          </div>
          <div className="zoomIn__date">
            {" "}
            <b>Date of Joining:</b> {property.joiningDate}
          </div>
          <div className="zoomIn__about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            et, sed a expedita optio fugit sit culpa? Numquam ea a non?
          </div>
        </div>
      </div>

      <div className="zoomIn__lower">
        <div className="zoomIn__work">
          <b>Work:</b> <br />
          <div className="zoomIn__dept">
            <b>Teaching Department</b>
          </div>
          <div className="zoomIn__workInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            explicabo quos reprehenderit doloremque natus odio hic, accusamus
            eum ipsa est quae voluptatum exercitationem perferendis porro maxime
            tempora ipsam fuga!
          </div>
          <div className="zoomIn__dept">
            <b>Teaching Department</b>
          </div>
          <div className="zoomIn__workInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            explicabo quos reprehenderit doloremque natus odio hic, accusamus
            eum ipsa est quae voluptatum exercitationem perferendis porro maxime
            tempora ipsam fuga!
          </div>
        </div>
      </div>
      <div className="zoomIn__graphs">
        <Bar
          data={barData.data}
          options={barData.options}
          className="graph__bar"
        />

        <Doughnut data={doughnutData.data}  />
      </div>
    </div>
  );
}
