import {TitlePage} from "@/layout/Main/TitlePage";
import {MarketMakingSolution} from "@/layout/Main/MarketMakingSolution";
import {MeetTheTeam} from "@/layout/Main/MeetTheTeam";
import {Partnerships} from "@/layout/Main/Partnerships";
import {LatestNews} from "@/layout/Main/LatestNews";
export const MainLayout = () => {
    return (
        <>
            <TitlePage/>
            <MarketMakingSolution/>
            <MeetTheTeam/>
            <Partnerships/>
            <LatestNews/>
        </>
    )
}