import React, { useEffect } from "react";

const AvatarComponent = () => {
  const classes_to_remove = [
    "look-right",
    "look-left",
    "look-down",
    "look-up",
    "look-down-right",
    "look-down-left",
    "look-up-right",
    "look-up-left",
  ];

  const removeClasses = () => {
    const head = document.querySelector(".head");
    const hair = document.querySelector(".hair");
    const neck = document.querySelector(".neck");
    for (let x = 0; x < classes_to_remove.length; x++) {
      head.classList.remove(classes_to_remove[x]);
      hair.classList.remove(classes_to_remove[x]);
      neck.classList.remove(classes_to_remove[x]);
    }
  };

  const direction = (e) => {
    //look left
    const head = document.querySelector(".head");
    const hair = document.querySelector(".hair");
    const neck = document.querySelector(".neck");
    if (e.clientX <= window.innerWidth / 2) {
      removeClasses();

      head.classList.add("look-left");
      hair.classList.add("look-left");
      neck.classList.add("look-left");
    }
    //look right
    if (e.clientX >= window.innerWidth - window.innerWidth / 2) {
      removeClasses();

      head.classList.add("look-right");
      hair.classList.add("look-right");
      neck.classList.add("look-right");
    }
    //look down
    if (e.clientY >= window.innerHeight - window.innerHeight / 2.5) {
      removeClasses();

      head.classList.add("look-down");
      hair.classList.add("look-down");
      neck.classList.add("look-down");
    }

    // look up
    if (e.clientY <= window.innerHeight / 2.5) {
      removeClasses();

      head.classList.add("look-up");
      hair.classList.add("look-up");
      neck.classList.add("look-up");
    }

    // look down right
    if (
      e.clientY >= window.innerHeight - window.innerHeight / 2.5 &&
      e.clientX >= window.innerWidth - window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-down-right");
      hair.classList.add("look-down-right");
      neck.classList.add("look-down-right");
    }

    // look down left
    if (
      e.clientY >= window.innerHeight - window.innerHeight / 2.5 &&
      e.clientX <= window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-down-left");
      hair.classList.add("look-down-left");
      neck.classList.add("look-down-left");
    }

    // look up right
    if (
      e.clientY <= window.innerHeight / 2.5 &&
      e.clientX >= window.innerWidth - window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-up-right");
      hair.classList.add("look-up-right");
      neck.classList.add("look-up-right");
    }

    // look down left
    if (
      e.clientY <= window.innerHeight / 2.5 &&
      e.clientX <= window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-up-left");
      hair.classList.add("look-up-left");
      neck.classList.add("look-up-left");
    }

    if (
      e.clientX > window.innerWidth / 3 &&
      e.clientX < window.innerWidth - window.innerWidth / 3 &&
      e.clientY > window.innerHeight / 2.5 &&
      e.clientY < window.innerHeight - window.innerHeight / 2.5
    ) {
      removeClasses();
    }
  };

  useEffect(() => {
    // addListener
    window.addEventListener("mousemove", direction);
    return () => {
      // remove listener
      window.removeEventListener("mousemove", direction);
    };
  }, [direction]);

  return (
    <div className="container">
      <div className="me">
        <div className="hair"></div>
        <div className="clothes"></div>
        <div className="neck"></div>
        <div className="head">
          <div className="bangs"></div>
          <div className="eyes1"></div>
          <div className="eyes2"></div>
          <div className="mouth">
            <div className="tongue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarComponent;
