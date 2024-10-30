"use client";

import { sidebarContext } from "@/context/context";
import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";
import SortSelectorModal from "./SortSelectorModal";

export default function ProductFilter() {
  const { sidebarOpen, setSidebarOpen } = useContext(sidebarContext)!;
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortRef]);

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
          <div className="sort-selector" ref={sortRef}>
            <div
              className="sort-selector-wrapper"
              onClick={() => setSortOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
              aria-label="Sort options"
            >
              <span>RECOMMENDED</span>
              <Image
                src="/assets/svg/arrow-down.svg"
                alt="Sort dropdown"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>

            {sortOpen && <SortSelectorModal />}
          </div>
        </div>
        <div className="filter-divider"></div>
      </section>

      {/* sm screen */}
      <section className="sm-product-filter">
        <div className="sm-product-filter-header">FILTER</div>
        <div className="filter-divider-line"></div>
        <div className="sort-selector">
          <div
            className="sort-selector-wrapper"
            onClick={() => setSortOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Sort options"
          >
            <span>RECOMMENDED</span>
            <Image
              src="/assets/svg/arrow-down.svg"
              alt="Sort dropdown"
              className="header-icon"
              width={24}
              height={24}
            />
          </div>

          {sortOpen && <SortSelectorModal />}
        </div>
        <div className="sm-filter-divider"></div>
      </section>
    </>
  );
}
