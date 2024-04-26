import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery"
import PacakageDetailData from "./PacakageDetailData";


export default function ThailandPacakage() {

    const Thailand = PacakageDetailBookData.filter(E => E.destname === "Thailand  Holiday Pacakage")
    const ThailandItems = Thailand.map((E) =>
        <PacakageDetailBookGallery destname={E.destname} image={E.image} Overview={E.Overview} Iternary={E.Iternary} Hotel={E.Hotel} Inclusion={E.Inclusion} Exclusion={E.Exclusion} />)


    return (
        <div>
            <PacakageDetailData data={ThailandItems} />
        </div>
    )
}