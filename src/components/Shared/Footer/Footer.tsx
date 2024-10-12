"use client";

import React from "react";
import Image from "next/image";
import clutchLogo from "../../../assets/f1.png";
import topDeveloperLogo from "../../../assets/f2.png";
import goodFirmsLogo from "../../../assets/f3.png";
import extractLogo from "../../../assets/f4.png";
import softwareWorldLogo from "../../../assets/f5.webp";
import msmeLogo from "../../../assets/f6.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section with Logos */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <Image src={clutchLogo} alt="Clutch" width={100} height={50} />
          <Image
            src={topDeveloperLogo}
            alt="Top Developer"
            width={100}
            height={50}
          />
          <Image src={goodFirmsLogo} alt="Good Firms" width={100} height={50} />
          <Image src={extractLogo} alt="Extract" width={100} height={50} />
          <Image
            src={softwareWorldLogo}
            alt="Software World"
            width={100}
            height={50}
          />
          <Image src={msmeLogo} alt="MSME" width={100} height={50} />
        </div>

        {/* Middle Section with Contact Info and Social */}
        <div className="flex flex-wrap justify-between items-start">
          <div className="mb-6">
            <h2 className="text-lg font-bold">Techno Softwares</h2>
            <p className="text-gray-400 mt-2">
              We lay the foundation of success with bricks of technology and
              cement them with efforts.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold">Contact Info</h2>
            <p className="text-gray-400 mt-2">
              <strong>Email:</strong> sales@technosoftwares.com <br />
              <strong>USA:</strong> +1-470-558-9655 <br />
              <strong>UK:</strong> +44-204-577-1819 <br />
              <strong>Malaysia:</strong> +603-7772-6381 <br />
              <strong>India:</strong> +91-89550-08744 <br />
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/techno.softwares"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/path-to-instagram-logo"
                  alt="Instagram"
                  width={50}
                  height={50}
                />
              </a>
            </div>
            {/* Instagram Posts Example */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Image
                src="/path-to-instagram-post1"
                alt="Instagram Post 1"
                width={100}
                height={100}
              />
              <Image
                src="/path-to-instagram-post2"
                alt="Instagram Post 2"
                width={100}
                height={100}
              />
              <Image
                src="/path-to-instagram-post3"
                alt="Instagram Post 3"
                width={100}
                height={100}
              />
              <Image
                src="/path-to-instagram-post4"
                alt="Instagram Post 4"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>Copyright © 2003-2024 Techno Softwares. All Rights Reserved.</p>
          <p>
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
