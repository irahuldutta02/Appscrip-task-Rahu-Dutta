import Image from "next/image";

export default function TopBanner() {
  return (
    <>
      <div className="top-banner" role="banner">
        <div className="banner-item banner-item-1">
          <Image
            src="/assets/svg/element-4.svg"
            alt="Decorative banner icon"
            className="banner-icon"
            height={20}
            width={20}
            aria-hidden="true"
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="banner-item">
          <Image
            src="/assets/svg/element-4.svg"
            alt="Decorative banner icon"
            className="banner-icon"
            height={20}
            width={20}
            aria-hidden="true"
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="banner-item banner-item-3">
          <Image
            src="/assets/svg/element-4.svg"
            alt="Decorative banner icon"
            className="banner-icon"
            height={20}
            width={20}
            aria-hidden="true"
          />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    </>
  );
}
