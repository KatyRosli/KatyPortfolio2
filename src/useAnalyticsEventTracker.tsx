import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Portfolio Website") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;