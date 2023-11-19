import React,{useState} from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";
import UseFetch from "../../../Utils/usefetch";
import Carousel from "../../../Components/carousel/Carousel";

const TopRated = () => {
    const [endpoint,setendpoint] = useState('movie');

    const onTabChange = (tab,index) => {
        tab === "Movies" ? setendpoint('movie') : setendpoint('tv');
    }

    const {data,loading} = UseFetch(`/discover/${endpoint}`);

  return (
    <div className="carouselSection" style={{  }}>
    <ContentWrapper
      chlildren={
        <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
        </div>
      }
    ></ContentWrapper>
    <Carousel data={data?.data?.results} loading={loading} />
  </div>
  )
}

export default TopRated
