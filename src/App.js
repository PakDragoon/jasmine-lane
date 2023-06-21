import { ToastContainer } from "react-toastify"
import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import MotionLazyContainer from './components/animateNew/MotionLazyContainer';
import "react-toastify/dist/ReactToastify.css"

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <MotionLazyContainer>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </MotionLazyContainer>
    </ThemeProvider>
  );
}