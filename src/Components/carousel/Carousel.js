import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../image/Img";
import PosterFallback from "../../Assets/no-poster.png";
import "./carousel.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CircleRating from "../circularProgressbar/CircularRating";
import Genre from "../genre/Genre";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  console.log(data);

  const navigation = (direction) => {
    const carouselRef = carouselContainer.current;
    const scroll = direction === "left" ? carouselRef.scrollLeft -  (carouselRef.offsetWidth + 20) : carouselRef.scrollLeft + (carouselRef.offsetWidth + 20);
    carouselRef.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <ContentWrapper
        chlildren={
          <div>
            <BsFillArrowLeftCircleFill
              className="arrow carouselLeftNav"
              onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
              className="arrow carouselRightNav"
              onClick={() => navigation("right")}
            />

            <div className="carouselItems" ref={carouselContainer}>
              {data?.map((carouselitem, id) => {
                let path = carouselitem?.poster_path
                  ? url?.poster + carouselitem?.poster_path
                  : PosterFallback;
                return (
                  <div className="carouselItem" key={id} onClick={() => {navigate(`/${carouselitem.media_type}/${carouselitem.id}`)}}>
                    {loading ? (
                      <div className="posterBlock">
                        <Skeleton
                          enableAnimation={true}
                          duration={1.5}
                          baseColor="#173d77"
                          highlightColor="#1c4b91"
                          width={200}
                          height={300}
                        />
                      </div>
                    ) : (
                      <div className="posterBlock">
                        <Img src={path} />
                        <CircleRating className="circleRating" rating={carouselitem?.vote_average.toFixed(1)} />
                        <Genre data={carouselitem?.genre_ids.slice(0,2)} />
                      </div>
                    )}
                    <div className="textBlock">
                      {loading ? (
                        <div className="title">
                          <Skeleton
                            enableAnimation={true}
                            duration={1.5}
                            baseColor="#173d77"
                            highlightColor="#1c4b91"
                          />
                        </div> // Skeleton for the name
                      ) : (
                        <div className="title">
                          {carouselitem?.title || carouselitem?.name}
                        </div>
                      )}
                      {loading ? (
                        <div className="date">
                          <Skeleton
                            enableAnimation={true}
                            duration={1.5}
                            baseColor="#173d77"
                            highlightColor="#1c4b91"
                          />
                        </div> // Skeleton for the date
                      ) : (
                        <div className="date">
                          {dayjs(carouselitem?.release_date).format(
                            "MMM D, YYYY"
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      ></ContentWrapper>
    </div>
  );
};

export default Carousel;
