"use client";

import { sidebarContext } from "@/context/context";
import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";
import SortSelectorModal from "./SortSelectorModal";

export default function ProductFilter() {
  const { sidebarOpen, setSidebarOpen } = useContext(sidebarContext)!;

  const [sortOpen, setSortOpen] = useState(false);
  const [sortOpenSm, setSortOpenSm] = useState(false);
  const sortRefLg = useRef<HTMLDivElement>(null);
  const sortRefSm = useRef<HTMLDivElement>(null);

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULARITY",
    "PRICE: LOW TO HIGH",
    "PRICE: HIGH TO LOW",
  ];
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sortRefLg.current &&
        !sortRefLg.current.contains(event.target as Node)
      ) {
        setSortOpen(false);
      }
      if (
        sortRefSm.current &&
        !sortRefSm.current.contains(event.target as Node)
      ) {
        setSortOpenSm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortRefLg, sortRefSm]);

  return (
    <>
      {/* lg screen */}
      <section className="product-filter">
        <div className="filter-header">
          <div className="filter-header-left">
            <div className="item-count">3425 Items</div>
            {sidebarOpen ? (
              <button
                className="filter-toggle"
                onClick={() => setSidebarOpen(false)}
                aria-label="Hide filter"
              >
                <Image
                  src="/assets/svg/arrow-left.svg"
                  alt="Arrow left"
                  className="banner-icon"
                  width={24}
                  height={24}
                />
                <span className="filter-toggle-text">HIDE FILTER</span>
              </button>
            ) : (
              <button
                className="filter-toggle"
                onClick={() => setSidebarOpen(true)}
                aria-label="Show filter"
              >
                <Image
                  src="/assets/svg/arrow-right-1.svg"
                  alt="Arrow right"
                  className="banner-icon"
                  width={24}
                  height={24}
                />
                <span className="filter-toggle-text">SHOW FILTER</span>
              </button>
            )}
          </div>
          <div className="sort-selector" ref={sortRefLg}>
            <div
              className="sort-selector-wrapper"
              onClick={() => setSortOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
              aria-label="Sort options"
            >
              <span>{selectedOption}</span>
              <Image
                src="/assets/svg/arrow-down.svg"
                alt="Sort dropdown"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>

            {sortOpen && (
              <SortSelectorModal
                sortOptions={sortOptions}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            )}
          </div>
        </div>
        <div className="filter-divider"></div>
      </section>

      {/* sm screen */}
      <section className="sm-product-filter">
        <div className="sm-product-filter-header">FILTER</div>
        <div className="filter-divider-line"></div>
        <div className="sort-selector" ref={sortRefSm}>
          <div
            className="sort-selector-wrapper"
            onClick={() => setSortOpenSm((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Sort options"
          >
            <span>{selectedOption}</span>
            <Image
              src="/assets/svg/arrow-down.svg"
              alt="Sort dropdown"
              className="header-icon"
              width={24}
              height={24}
            />
          </div>

          {sortOpenSm && (
            <SortSelectorModal
              sortOptions={sortOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </div>
        <div className="sm-filter-divider"></div>
      </section>
    </>
  );
}
