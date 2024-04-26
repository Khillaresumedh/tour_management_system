import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery";
import PacakageDetailData from "./PacakageDetailData";

export default function KeralaPacakage(props) {
  const Kerala = PacakageDetailBookData.filter(
    (E) => E.destname === "kerala Holiday Pacakage"
  );
  const KeralaItems = Kerala.map((E) => (
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
      <PacakageDetailData data={KeralaItems} />
    </div>
  );
}
