import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-1/2 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
           ${reverse ? " fadeRightMini" : " fadeLeftMini"}
           ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`
            ${reverse ? styles.blackText : styles.whiteText} 
            ${styles.h1Text}`}
          >
            {title}
          </h1>
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </h1>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="link to nft marketplace react native"
            />
          )}
        </div>
      </div>

      <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
        <img
          src={mockupImg}
          alt="mockup"
          className={`${reverse ? " fadeLeftMini" : " fadeRightMini"}
        ${styles.sectionImg} sm:object-fill sm:w-full`}
        />
      </div>
    </div>
  );
};

export default SectionWrapper;
