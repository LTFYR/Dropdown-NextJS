import React from "react";
import customImg from "@/assets/images/prdbg.png";
import Image from "next/image";

const Submenu = () => {
  return (
    <div class="submenu">
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repudiandae reprehenderit sapiente?
      </h3>
      <div class="col-3">
        <div class="submenu-col">
          <h4>Services</h4>
          <Image class="submenu-img" src={customImg} alt="submenuImage" />
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
          <Image class="submenu-img" src={customImg} alt="submenuImage" />
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
          <Image class="submenu-img" src={customImg} alt="submenuImage" />
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
  );
};

export default Submenu;
