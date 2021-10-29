import Image from "next/image";
import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import useInterval from "react-useinterval";

import { Single, Double, Quadruple, Octuple } from "./CollagePics/CollagePics";

import useStyles from "./styles";

const Collage = ({ collage }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [shuffled, setShuffled] = useState();
  const [elements, setElements] = useState();
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    let randomsArray = [];
    for (let i = 0; i < collage.slides; i++) {
      randomsArray.push(Math.random());
    }
    setRandoms(randomsArray);

    const photos = [...collage.images];
    setShuffled(shuffle(photos));
  }, []);

  const switchIndex = () => {
    if (index < collage.slides) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useInterval(switchIndex, 4000);

  let imgCount = 0;

  return (
    <>
      <div className={classes.collage}>
        {shuffled &&
          randoms.map((random, i) =>
            random < 0.33 ? (
              <div
                className={`${classes.collage_item} ${
                  i <= index ? classes.show : classes.hide
                }`}
                style={{ zIndex: i }}
                key={random + "-div"}
              >
                <Double
                  photo1={shuffled[imgCount]}
                  photo2={shuffled[imgCount + 1]}
                />
                {(imgCount = imgCount + 2)}
              </div>
            ) : random < 0.66 ? (
              <div
                className={`${classes.collage_item} ${
                  i <= index ? classes.show : classes.hide
                }`}
                style={{ zIndex: i }}
                key={random + "-div"}
              >
                <Quadruple
                  photo1={shuffled[imgCount]}
                  photo2={shuffled[imgCount + 1]}
                  photo3={shuffled[imgCount + 2]}
                  photo4={shuffled[imgCount + 3]}
                />
                {(imgCount = imgCount + 4)}
              </div>
            ) : (
              <div
                className={`${classes.collage_item} ${
                  i <= index ? classes.show : classes.hide
                }`}
                style={{ zIndex: i }}
                key={random + "-div"}
              >
                <Octuple
                  photo1={shuffled[imgCount]}
                  photo2={shuffled[imgCount + 1]}
                  photo3={shuffled[imgCount + 2]}
                  photo4={shuffled[imgCount + 3]}
                  photo5={shuffled[imgCount + 4]}
                  photo6={shuffled[imgCount + 5]}
                  photo7={shuffled[imgCount + 6]}
                  photo8={shuffled[imgCount + 7]}
                />
                {(imgCount = imgCount + 8)}
              </div>
            )
          )}
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className={classes.collage}>
  //       {shuffled &&
  //         randoms.map((random, i) =>
  //           random < 0.25 ? (
  //             <div
  //               className={`${classes.collage_item} ${
  //                 i <= index ? classes.show : classes.hide
  //               }`}
  //               style={{ zIndex: i }}
  //               key={random + "-div"}
  //             >
  //               <Single photo={shuffled[imgCount]} />
  //               {(imgCount = imgCount + 1)}
  //             </div>
  //           ) : random < 0.5 ? (
  //             <div
  //               className={`${classes.collage_item} ${
  //                 i <= index ? classes.show : classes.hide
  //               }`}
  //               style={{ zIndex: i }}
  //               key={random + "-div"}
  //             >
  //               <Double
  //                 photo1={shuffled[imgCount]}
  //                 photo2={shuffled[imgCount + 1]}
  //               />
  //               {(imgCount = imgCount + 2)}
  //             </div>
  //           ) : random < 0.75 ? (
  //             <div
  //               className={`${classes.collage_item} ${
  //                 i <= index ? classes.show : classes.hide
  //               }`}
  //               style={{ zIndex: i }}
  //               key={random + "-div"}
  //             >
  //               <Quadruple
  //                 photo1={shuffled[imgCount]}
  //                 photo2={shuffled[imgCount + 1]}
  //                 photo3={shuffled[imgCount + 2]}
  //                 photo4={shuffled[imgCount + 3]}
  //               />
  //               {(imgCount = imgCount + 4)}
  //             </div>
  //           ) : (
  //             <div
  //               className={`${classes.collage_item} ${
  //                 i <= index ? classes.show : classes.hide
  //               }`}
  //               style={{ zIndex: i }}
  //               key={random + "-div"}
  //             >
  //               <Octuple
  //                 photo1={shuffled[imgCount]}
  //                 photo2={shuffled[imgCount + 1]}
  //                 photo3={shuffled[imgCount + 2]}
  //                 photo4={shuffled[imgCount + 3]}
  //                 photo5={shuffled[imgCount + 4]}
  //                 photo6={shuffled[imgCount + 5]}
  //                 photo7={shuffled[imgCount + 6]}
  //                 photo8={shuffled[imgCount + 7]}
  //               />
  //               {(imgCount = imgCount + 8)}
  //             </div>
  //           )
  //         )}
  //     </div>
  //   </>
  // );
};

export default Collage;

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
