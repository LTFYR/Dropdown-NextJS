"use client";
import React, { useState } from "react";
import customImg from "@/assets/images/prdbg.png";
import Image from "next/image";
import { navs } from "@/mock";

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
            {/*map*/}
            <li>
              <a href="#" class="title">
                Home
              </a>
            </li>
            <li
              class="submenuParent"
              id="firstDropdown"
              //   onMouseEnter={handleMouseEnter}
              //   onMouseLeave={handleMouseLeave}
            >
              <a href="#" class="title">
                Products
              </a>
              <div class="submenu-wrapper">
                <div class="submenu">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati repudiandae reprehenderit sapiente?
                  </h3>
                  <div class="col-3">
                    <div class="submenu-col">
                      <h4>Services</h4>
                      <Image
                        class="submenu-img"
                        src={customImg}
                        alt="submenuImage"
                      />
                      <ul>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                      </ul>
                    </div>
                    <div class="submenu-col">
                      <h4>Services</h4>
                      <Image
                        class="submenu-img"
                        src={customImg}
                        alt="submenuImage"
                      />
                      <ul>
                        <ul>
                          <li>
                            <a href="#">Penetration Testing</a>
                          </li>
                          <li>
                            <a href="#">Penetration Testing</a>
                          </li>
                          <li>
                            <a href="#">Penetration Testing</a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div class="submenu-col">
                      <h4>Services</h4>
                      <Image
                        class="submenu-img"
                        src={customImg}
                        alt="submenuImage"
                      />
                      <ul>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                        <li>
                          <a href="#">Penetration Testing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="submenuParent">
              <a href="#" class="title">
                Serives
              </a>
              <div class="submenu-wrapper grid">
                <div class="submenu">
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li class="submenuParent">
              <a href="#" class="title">
                Serives
              </a>
              <div class="submenu-wrapper grid">
                <div class="submenu">
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="submenu-col">
                      <div class="icon">
                        <p>Image</p>
                        <h3>Serviced</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, eos?
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
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
