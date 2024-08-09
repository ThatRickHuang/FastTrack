import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import NavBar from "./NavBar";
function Home() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("0");
  const [protein, setProtein] = useState("0");
  const [weight, setWeight] = useState("");
  const fetchData = () => {
    if (Number(weight) === 0) {
      setCalories(0);
      setProtein("0");
      return;
    }
    function isNum(str) {
      return !isNaN(str) && !isNaN(parseFloat(str));
    }

    if (Number(weight) < 0 || !isNum(weight)) {
      alert("Enter valid weight in grams or correct food");
      setCalories("0");
      setProtein("0");
      return;
    }
    axios
      .get(
        `https://api.calorieninjas.com/v1/nutrition?query=${weight}g + ${food}`,
        {
          headers: { "X-Api-Key": "OtFuzh8Fk1u9cStOpsMxMg==1VtLq2lyHT73KgPv" },
        }
      )
      .then((res) => {
        if (res.data.items && res.data.items.length > 0) {
          setCalories(res.data.items[0].calories);
          setProtein(res.data.items[0].protein_g);
        } else {
          setCalories("0");
          setProtein("0");
          alert("Enter valid food");
        }
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <input
          className=" absolute top-[271px] left-[371px] rounded-full h-8 text-center"
          placeholder="Enter Ingridient"
          onChange={(event) => {
            setFood(event.target.value);
          }}
        />
        <input
          className=" absolute top-[371px] left-[371px] rounded-full h-8 text-center"
          placeholder="Enter Weight in Grams"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button
          onClick={fetchData}
          className=" absolute top-[476px] right-[676px] rounded-full bg-white w-20 h-8 hover:font-semibold"
        >
          Submit
        </button>
        <h1 className=" absolute top-[271px] right-[371px] drop-shadow-md ">
          Calories: {calories}
        </h1>
        <h1 className=" absolute top-[371px] right-[371px] drop-shadow-2xl">
          Protein: {protein}g
        </h1>
      </div>
    </>
  );
}

export default Home;
