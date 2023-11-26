"use client";
import React, { useState } from "react";
import { navs } from "@/mock";
import Submenu from "./Submenu";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [navData, setNavData] = useState(navs);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div class="wrapper">
      <div class="menu-wrapper">
        <nav class="mega-menu">
          <ul>
            {navData.map((data) => (
              <li
                id={data.id !== 1 ? "subid" : ""}
                className={data.id !== 1 ? "submenuParent" : ""}
              >
                <a href="#" class="title">
                  {data.name}
                </a>
                <div
                  class={
                    data.id === 2 ? "submenu-wrapper sub" : "submenu-wrapper"
                  }
                >
                  <Submenu />
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div class="bodyContent">
        <h2>Content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
        <h2>Content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
        <h2>Content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          voluptatem laboriosam, et ut eius autem quisquam nostrum ad totam
          quasi tenetur porro libero explicabo atque voluptates repellat aperiam
          soluta incidunt numquam deleniti minima fuga?
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
