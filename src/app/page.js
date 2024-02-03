// import ConvertCardSecond from "./components/ConvertCardSecond";
import ConvertCardContainer from "./components/ConvertCardContainer";
import Header from "./components/Header";
import PdfCardContainer from "./components/PdfCardContainer";
import ConvertCardSecondContainer from "./components/ConvertCardSecondContainer";
import ConvertCardThirdContainer from "./components/ConvertCardThirdContainer";
import Footer from "./components/Footer";
// import MultipleItems from "./components/MultipleCarousel";




export default function Home() {
  return (
    <div className="main">
<Header/>
    <PdfCardContainer/>
    <ConvertCardContainer/>
    <ConvertCardSecondContainer/>
    <ConvertCardThirdContainer/>
    <Footer/>
    {/* <MultipleItems/> */}
    </div>  
  );
}
