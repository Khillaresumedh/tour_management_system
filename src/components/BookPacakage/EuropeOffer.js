import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery";
import PacakageDetailData from "./PacakageDetailData";
import { Link } from "react-router-dom";
// import "./EuropePackage.css";

export default function EuropeOffer(props) {
  const Europe = PacakageDetailBookData.filter(
    (E) => E.destname === "Europe Holiday Pacakage"
  );
  const EuropeItems = Europe.map((E) => (
    <PacakageDetailBookGallery
      destname={E.destname}
      image={E.image}
      Overview={E.Overview}
      Iternary={E.Iternary}
      Hotel={E.Hotel}
      Inclusion={E.Inclusion}
      Exclusion={E.Exclusion}
    />
  ));

  return (
    <div>
      <PacakageDetailData data={EuropeItems} />
      <div className="book-now-btn1">
        <Link className="book-now-btn" to="/BookNowCondition">
          Book Now!
        </Link>
      </div>
    </div>
  );
}
