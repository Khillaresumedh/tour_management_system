import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery"
import PacakageDetailData from "./PacakageDetailData";


export default function ShimlaPacakage() {

    const Shimla = PacakageDetailBookData.filter(E => E.destname === "Shimla Holiday Pacakage")
    const ShimlaItems = Shimla.map((E) =>
        <PacakageDetailBookGallery destname={E.destname} image={E.image} Overview={E.Overview} Iternary={E.Iternary} Hotel={E.Hotel} Inclusion={E.Inclusion} Exclusion={E.Exclusion} />)


    return (
        <div>
            <PacakageDetailData data={ShimlaItems} />
        </div>
    )
}