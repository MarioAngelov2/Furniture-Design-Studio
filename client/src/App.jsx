import "./App.css";
import Blog from "./components/Blog/Blog";
import CallToAction from "./components/About/CallToAction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Hero/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/LatestProjects/Projects";
import Services from "./components/Offerings/Services";
import Shop from "./components/Shop/Shop";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./components/Errors/ErrorBoundaryComponent";

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
