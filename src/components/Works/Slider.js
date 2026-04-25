import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./Slider.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TechnologyTag from "../TechnologyTag/TechnologyTag";

const Slider = ({ title, description, images, type, technologies = [] }) => {
	return (
		<div className='container'>
			<p className='heading'>{title}</p>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className={
					type === "web" ? "swiper_container" : "swiper_container_mobile"
				}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt={`slide_image_${index + 1}`} />
					</SwiperSlide>
				))}

				<div className='slider-controler'>
					<div className='swiper-pagination'></div>
				</div>
			</Swiper>
			<p className='description'>{description}</p>
			<div className='techList'>
				{technologies.map((tech, index) => (
					<TechnologyTag key={index} tech={tech} />
				))}
			</div>
		</div>
	);
};

export default Slider;
