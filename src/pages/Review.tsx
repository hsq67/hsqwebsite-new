import reviewbg from "@/assets/Review/reviewbg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CommanButton from "@/components/buttons/Button";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/buttons/Whatsapp";
import GoogleReviewCard from "@/components/cards/GoogleReview";
// import { GoogleReview } from "@/api/roomsApi";
import "swiper/css";
import "swiper/css/navigation";
import { useReviewStore } from "@/store/store";

function Review() {
  const { reviews } = useReviewStore();
  // useEffect(() => {
  //   GoogleReview();
  // }, []);

  return (
    <>
      <div>
        {/* upper section */}
        <section
          className="w-full bg-cover bg-bottom h-[35vh] xs:h-[30vh] lg:h-[70vh]"
          style={{ backgroundImage: `url(${reviewbg})` }}
        >
          <div className="flex flex-col  text-white justify-center items-center pt-12 xs:pt-14 md:pt-24 lg:pt-36 space-y-2 2xl:pt-56">
            <h1 className="Tuesdaynight text-2xl md:text-3xl lg:text-5xl 2xl:text-8xl">
              Stories
            </h1>
            <h1 className="poppins-bold text-2xl xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl">
              OF SATISFACTION
            </h1>
            <p className="text-sm text-center 2xl:text-lg">
              Discover what makes every stay at HSQ Towers truly unforgettable
            </p>
          </div>
        </section>
        {/* body section */}
        <section className="backgroundcolor">
          <h1 className="poppins-bold text-2xl pt-12 pb-10 text-center 2xl:text-4xl">
            Stories Shared by Our Visitors
          </h1>
          {/* cards with crousel */}
          <div className="w-full h-full  sm: pb-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={-8} // gap between cards
              loop={true}
              // centeredSlides={true}
              slidesPerView="auto"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  // spaceBetween: 40,
                  centeredSlides: true,
                }, // mobile → 1 card
                320: {
                  slidesPerView: 1,
                  // spaceBetween: 40,
                },
                360: {
                  slidesPerView: 1.3,
                  spaceBetween: 40,
                },
                400: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  // centeredSlides: true,
                }, // mobile → 1 card
                411: {
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: -130,
                  centeredSlides: true,
                }, // tablet → 2 cards
                1024: { slidesPerView: 2.2 }, // desktop → 3 cards
                1280: {
                  slidesPerView: 2.2,
                  spaceBetween: -100,
                  centeredSlides: true,
                }, // large desktop → 4 cards
                1536: {
                  slidesPerView: 2.9,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
              }}
              className="w-full"
            >
              {reviews?.map((item, index) => (
                <SwiperSlide className="" key={index}>
                  <div className="mt-10  mx-10 ">
                    {/* <img
                      src={dummyreview}
                      alt={`Review ${index}`}
                      className="w-full h-auto rounded-2xl shadow-xl object-cover"
                    /> */}

                    <GoogleReviewCard
                      name={item.name}
                      thumbnail={item.thumbnail}
                      snippet={item.snippet}
                      date={item.date}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* review button  */}
          <div className="flex items-center justify-center pb-20 lg:pt-10  lg:pb-28">
            <a
              href="https://g.page/r/CUELIdypdTzcEBM/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CommanButton
                className="underline"
                label="Write A Review"
              ></CommanButton>
            </a>
          </div>
        </section>
        <div className="relative">
          <WhatsAppButton />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Review;
