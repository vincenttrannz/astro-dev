import React, { useEffect } from "react";

export default function MeteorRain() {
  const Meteors = Array.apply(null, Array(20));
  const meteorRain = () => {
    var reset = function (e:any) {
      e.target.className = "";
      setTimeout(function () {
        e.target.className = "meteor";
      }, 0);
    };

    var meteors = document.querySelectorAll(".meteor");
    for (var i = 0; i < meteors.length; i++) {
      meteors[i].addEventListener("animationend", reset);
    }
  };

  useEffect(() => {
    meteorRain();
  }, [])

  return (
    <div className="meteors">
      {
        Meteors.map((meteor, i:number) => {
          return (
            <div key={i} className="meteor"></div>
          )
        })
      }
    </div>
  );
}
