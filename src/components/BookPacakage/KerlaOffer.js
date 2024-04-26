import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery";
import PacakageDetailData from "./PacakageDetailData";
import { Link, Outlet } from "react-router-dom";
// import "./EuropePackage.css";

export default function KerlaOffer(props) {
  const Kerla = PacakageDetailBookData.filter(
    (E) => E.destname === "Kerla Holiday Pacakage"
  );
  const KerlaItems = Kerla.map((E) => (
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
      <PacakageDetailData data={KerlaItems} />
      <div className="book-now-btn1">
        <Link className="book-now-btn" to="/BookNowCondition">
          Book Now!
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
