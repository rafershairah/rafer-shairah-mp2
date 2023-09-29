import React from "react";
import Marquee from "react-fast-marquee";

const announcement = () => {
  return (
    <>
      <Marquee>
        <div className="announcement">
          <div className="announcement-text text1">
            <span>
              🌟 Exciting Announcement: Discover Your Skin's Radiance! 🌟 We're
              thrilled to introduce our latest skincare breakthroughs at
              CosmeCare!
            </span>
            <span>🌼 New Arrivals: Unveil Your Skin's Potential 🌼</span>
          </div>
          <div className="announcement-text text2">
            <span>💎 Exclusive Offer: Glow from Within 💎</span>
            <span>✨ Expert Advice: Your Skin, Our Priority ✨</span>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default announcement;
