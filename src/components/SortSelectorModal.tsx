import Image from "next/image";

export default function SortSelectorModal() {
  return (
    <>
      <div className="sort-selector-modal">
        <div className="sort-option selected">
          <Image
            src="/assets/svg/tick.svg"
            alt="Sort dropdown"
            className="header-icon"
            width={20}
            height={20}
          />
          RECOMMENDED
        </div>
        <div className="sort-option">NEWEST FIRST</div>
        <div className="sort-option">POPULARITY</div>
        <div className="sort-option">PRICE: LOW TO HIGH</div>
        <div className="sort-option">PRICE: HIGH TO LOW</div>
      </div>
    </>
  );
}
