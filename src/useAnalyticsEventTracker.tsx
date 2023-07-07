import ReactGA from "react-ga";

type AnalyticsEventTracker = (action?: string, label?: string) => void;

const useAnalyticsEventTracker = (category = "Portfolio Website"): AnalyticsEventTracker => {
  const eventTracker: AnalyticsEventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;