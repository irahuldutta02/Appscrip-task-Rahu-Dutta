"use client";

import { sidebarContext } from "@/context/context";
import Image from "next/image";
import { useContext, useState } from "react";

const filters = [
  {
    _id: 2,
    label: "IDEAL FOR",
    options: [
      { _id: 21, label: "Men" },
      { _id: 22, label: "Women" },
    ],
  },
  {
    _id: 3,
    label: "Occasion",
    options: [
      { _id: 31, label: "Baby & Kids" },
      { _id: 32, label: "Rainy Season" },
      { _id: 33, label: "Casual" },
      { _id: 34, label: "Wedding" },
      { _id: 35, label: "Party" },
    ],
  },
  {
    _id: 4,
    label: "Fabric",
    options: [
      { _id: 41, label: "French Knot" },
      { _id: 42, label: "Zardosi" },
    ],
  },
  {
    _id: 5,
    label: "Segment",
    options: [
      { _id: 51, label: "Regular" },
      { _id: 52, label: "Fancy" },
      { _id: 53, label: "Muslin" },
      { _id: 54, label: "Embroidery" },
      { _id: 55, label: "Satin Blend" },
    ],
  },
  {
    _id: 6,
    label: "Suitable For",
    options: [
      { _id: 61, label: "Ethnic" },
      { _id: 62, label: "Contemporary" },
      { _id: 63, label: "Formal Wear" },
      { _id: 64, label: "Western Wear" },
      { _id: 65, label: "Casual Wear" },
    ],
  },
  {
    _id: 7,
    label: "Raw Materials",
    options: [
      { _id: 71, label: "Linen" },
      { _id: 72, label: "Raw Silk" },
      { _id: 73, label: "Cotton" },
      { _id: 74, label: "Wool" },
      { _id: 75, label: "Silk" },
      { _id: 76, label: "Cotton Silk" },
      { _id: 77, label: "Leather" },
      { _id: 78, label: "Cotton" },
      { _id: 79, label: "Cellulosic Fibers" },
    ],
  },
  {
    _id: 8,
    label: "Pattern",
    options: [
      { _id: 81, label: "Windowpane" },
      { _id: 82, label: "Pinstripes" },
      { _id: 83, label: "Solid" },
      { _id: 84, label: "Chalk Stripes" },
      { _id: 85, label: "Slim Fit" },
      { _id: 86, label: "Tartan" },
    ],
  },
  {
    _id: 9,
    label: "Jacket Material",
    options: [
      { _id: 91, label: "Velvet" },
      { _id: 92, label: "Cotton" },
      { _id: 93, label: "Leather" },
    ],
  },
  {
    _id: 10,
    label: "Sleeve Length",
    options: [
      { _id: 101, label: "Half Sleeve" },
      { _id: 102, label: "Cap Sleeve" },
    ],
  },
  {
    _id: 11,
    label: "Sleeve",
    options: [
      { _id: 111, label: "Roll-Up Sleeve" },
      { _id: 112, label: "Regular Sleeves" },
      { _id: 113, label: "Long Sleeve" },
      { _id: 114, label: "Full Sleeve" },
    ],
  },
];

export default function Sidebar() {
  const { sidebarOpen } = useContext(sidebarContext)!;

  const [openFilter, setOpenFilter] = useState<number | null>(null);

  if (!sidebarOpen) return null;

  return (
    <>
      <aside className="filter-sidebar" aria-labelledby="filter-sidebar-title">
        <div className="filter-section">
          {/* Customizable */}
          <div className="filter-option">
            <Image
              src="/assets/svg/Checkbox.svg"
              alt="Customizable"
              className="filter-group-toggle"
              width={24}
              height={24}
            />
            <span className="sr-only">Customizable</span>
          </div>
          <div className="filter-separator"></div>

          {filters.map((filter) => (
            <div key={filter._id} className="filter-group">
              <div
                className="filter-group-header"
                onClick={() => {
                  setOpenFilter((prev) =>
                    prev === filter._id ? null : filter._id
                  );
                }}
                role="button"
                aria-expanded={openFilter === filter._id}
                aria-controls={`filter-options-${filter._id}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setOpenFilter((prev) =>
                      prev === filter._id ? null : filter._id
                    );
                  }
                }}
              >
                <span>{filter.label}</span>
                {openFilter === filter._id ? (
                  <Image
                    src="/assets/svg/arrow-up.svg"
                    alt="Collapse"
                    className="filter-group-toggle"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/assets/svg/arrow-down.svg"
                    alt="Expand"
                    className="filter-group-toggle"
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <div className="all">All</div>
              <div
                id={`filter-options-${filter._id}`}
                className={`filter-group-options ${
                  openFilter === filter._id ? "" : "display-none"
                }`}
              >
                <div className="unselect-all">Unselect All</div>
                {filter.options.map((option) => (
                  <div key={option._id} className="filter-option">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      id={`filter-${option._id}`}
                    />
                    <label
                      htmlFor={`filter-${option._id}`}
                      className="filter-label"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="filter-separator"></div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
