import { useRef } from "react";
import "./App.css";
import Blog from "./components/Blog";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Shop from "./components/Shop";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./components/errors/ErrorBoundaryComponent";

function App() {
    return (
        <div>
            <ErrorBoundary
                FallbackComponent={ErrorFallBack}
                onError={() => console.log("Error happened")}
            >
                <Navbar />
                <Header />
                <Projects />
                <Services />
                <Shop />
                <Blog />
                <CallToAction />
                <Footer />
            </ErrorBoundary>
        </div>
    );
}

export default App;
