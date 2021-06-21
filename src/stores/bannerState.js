import { atom } from "recoil";

const totalBannerState = atom({
  key: "totalBannerState",
  default: [],
});

export { totalBannerState };
