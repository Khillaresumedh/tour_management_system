import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery"
import PacakageDetailData from "./PacakageDetailData";


export default function AndamanPacakage() {

    const Andamanpckg = PacakageDetailBookData.filter((E) => E.destname === "Andaman Holiday Pacakage")
    const AndamanPkgItems = Andamanpckg.map((E) =>
        <PacakageDetailBookGallery destname={E.destname} image={E.image} Overview={E.Overview} Iternary={E.Iternary} Hotel={E.Hotel} Inclusion={E.Inclusion} Exclusion={E.Exclusion} />)


    return (
        <div>
            <PacakageDetailData data={AndamanPkgItems} />
        </div>
    );
}