import React from "react";
import "../components/Title.css";

const Title = () => {
  const spans = document.querySelectorAll(".word span");

  spans.forEach((span, idx) => {
    span.addEventListener("click", (e) => {
      e.target.classList.add("active");
    });
    span.addEventListener("animationend", (e) => {
      e.target.classList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
      span.classList.add("active");
    }, 1000 * (idx + 1));
  });
  return (
    <div class="word">
      <span>T</span>
      <span>O</span>
      <span>D</span>
      <span>O</span>
      <span>-</span>
      <span>L</span>
      <span>I</span>
      <span>S</span>
      <span>T</span>
    </div>
  );
};

export default Title;
