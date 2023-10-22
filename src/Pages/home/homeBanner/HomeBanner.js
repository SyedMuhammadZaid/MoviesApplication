import React,{useState,useEffect} from 'react'
import { Row,Col } from 'antd'
import {useNavigate} from 'react-router-dom'
import './style.scss'
import UseFetch from '../../../Utils/usefetch'
import {useSelector} from 'react-redux';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import Img from '../../../Components/image/Img'

const HomeBanner = () => {
  const [background,setbackground] = useState("");
  const [searchquery,setsearchquery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home);

  const keypresshandler = (event) => {
    if(event.key === "Enter" && searchquery.length!==0){
      navigate(`/search/${searchquery}`)
    }
  }

  const {loading,data,error} = UseFetch('/movie/upcoming');


  useEffect(()=>{
    if(data){
      const bg = data?.data?.results;
      const bg_path = url.backdrop + bg[Math.floor(Math.random() * 20)]?.backdrop_path
      setbackground(bg_path)
    }
  },[data])
  
  return (
    <Row className='container'>

    <Row className='img-container'>
      <Img src={background} classname={"backdrop-img"} />
    </Row>

    <Row className='backdrop-shadow'>
        <Col span={24}>
        </Col>
      </Row>

      <ContentWrapper chlildren={
        <>
          <Col span={24} className='banner-content'>
                <h2>Welcome.</h2>
                <p>Millions of movies, Tv shows and people to discover. Explore now!</p>
          </Col>
      
          <Col span={24} className='banner-action'>
                <input placeholder='Search for a movie or tv show ...'
                value={searchquery} 
                onChange={(e) => setsearchquery(e.target.value)}
                onKeyUp={keypresshandler}
                />
                
                <button>Search</button>
           </Col>
        </>
      } />


    </Row>


  
  )
}

export default HomeBanner
