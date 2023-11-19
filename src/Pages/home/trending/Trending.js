import React,{useState} from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";
import UseFetch from "../../../Utils/usefetch";
import Carousel from "../../../Components/carousel/Carousel";


const Trending = () => {

  const [endpoint,setEndoint] = useState('day')

  const onTabChange = (tab,index) => {
    tab === 'Day' ? setEndoint('day') : setEndoint('week');
  };

  const {data,loading} = UseFetch(`/trending/all/${endpoint}`)
  console.log(data)

  return (
    <div className="carouselSection" style={{  }}>
      <ContentWrapper
        chlildren={
          <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
          </div>
        }
      ></ContentWrapper>
      <Carousel data={data?.data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
