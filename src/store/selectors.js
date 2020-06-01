export const getAds = (state) => state.ads.results;
export const getAdsSuccess = (state) => state.ads.success;
export const getUsername = (state) => state.login.username;

export const getAdDetail = (state, ownProps) => {
  const ads = getAds(state);
  const id = ownProps.match.params.id;
  if (!ads || !id) {
    return false;
  }
  const ad = ads.filter((ad) => ad._id === id);
  return ad[0];
};
