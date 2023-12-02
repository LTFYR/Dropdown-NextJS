import Link from "next/link";
import React from "react";

const Top = () => {
  const links = [
    {
      id: 1,
      link: "Partners",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Links",
    },
  ];

  return (
    <div className="topWrapper">
      <div className="logo">
        <h1>Test</h1>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li className="dropdownParent" key={link.id}>
            <Link href="#">{link.link}</Link>
            <div className="dropdown">
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top;
