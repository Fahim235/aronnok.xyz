/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Devider from "./Devider";

const HeroSection = ({ banner }) => {
  useEffect(() => {
    const imgEl = document.querySelectorAll(".brand-item");

    imgEl.forEach((el) => {
      const imgElBlock = el.querySelector(".hover-reveal");
      const revealInner = el.querySelector(".hover-reveal_inner");
      const revealImage = el.querySelector(".hover-reveal_img");

      // gsap.set(imgElBlock, { xPercent: -50, yPercent: -50 });

      const pos = { x: el.offsetWidth / 2, y: el.offsetHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;

      const xSet = gsap.quickSetter(imgElBlock, "x", "px");
      const ySet = gsap.quickSetter(imgElBlock, "y", "px");

      // adjust speed for higher refresh monitors
      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });

      // el mouseenter
      el.addEventListener("mouseenter", (e) => {
        gsap.to(imgElBlock, {
          opacity: 1,
          // duration: 0.35,
        });
      });

      // el mouseleave
      el.addEventListener("mouseleave", (e) => {
        gsap.to(imgElBlock, {
          opacity: 0,
          // duration: 0.15,
        });
      });

      // el mousemove
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y - 160;
      });
    });
  }, []);

  return (
    <>
      <section className="section banner pb-0">
        <div className="container">
          <div className="mb-16 flex flex-col items-center text-center sm:items-end md:flex-row md:text-left">
            <div className="mt-12 md:mt-0">
              <div className="mb-5 flex items-center justify-center font-primary md:justify-start">
                <svg
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={38}
                  width={38}
                >
                  <path
                    d="M15.162 0.19003C8.77798 1.27303 3.13498 7.18203 1.00698 14.991C0.569977 16.606 0.512977 17.195 0.493977 19.95C0.474977 23.37 0.664977 24.415 1.70998 27.113C3.38198 31.464 7.48598 35.34 12.122 36.955C18.012 39.007 25.023 37.829 30.305 33.877C34.884 30.457 37.316 25.859 37.563 20.14C37.81 14.25 35.682 8.83503 31.559 4.88303C29.279 2.69803 27.189 1.69103 23.541 0.96903C22.458 0.76003 20.976 0.45603 20.235 0.28503C18.829 -0.0189702 16.644 -0.0569702 15.162 0.19003ZM20.235 3.24903C21.071 3.36303 22.135 3.47703 22.61 3.53403C23.731 3.62903 25.878 4.29403 27.056 4.88303C30.457 6.61203 32.908 9.89903 34.333 14.63C34.979 16.815 35.15 20.748 34.694 22.838C33.459 28.405 28.595 33.136 22.401 34.808C20.311 35.378 16.34 35.416 14.44 34.884C10.431 33.782 6.82098 31.179 4.88298 28.006C3.68598 26.011 3.19198 24.187 3.07798 21.375C2.98298 18.392 3.30598 16.264 4.27498 13.566C5.92798 8.93003 9.46198 5.01603 13.376 3.51503C14.345 3.13503 14.877 3.05903 16.625 3.05903C17.784 3.05903 19.399 3.15403 20.235 3.24903Z"
                    fill="black"
                  />
                  <path
                    d="M12.844 14.687C11.875 15.656 12.426 17.176 13.756 17.176C14.668 17.176 15.105 16.72 15.105 15.77C15.105 14.896 14.782 14.497 13.927 14.326C13.433 14.231 13.224 14.307 12.844 14.687Z"
                    fill="black"
                  />
                  <path
                    d="M23.009 14.763C21.945 15.656 22.553 17.29 23.94 17.29C24.491 17.29 24.757 17.176 24.966 16.872C25.954 15.485 24.282 13.718 23.009 14.763Z"
                    fill="black"
                  />
                  <path
                    d="M10.944 22.439C10.678 22.762 10.45 23.085 10.45 23.18C10.45 23.978 12.141 25.479 14.193 26.524C18.259 28.557 22.895 27.911 26.201 24.833C27.417 23.712 27.417 22.762 26.22 22.135C25.555 21.793 25.232 21.888 24.13 22.8C22.173 24.415 19.855 25.118 17.822 24.7C16.416 24.434 14.877 23.674 13.528 22.629C12.312 21.66 11.647 21.603 10.944 22.439Z"
                    fill="black"
                  />
                </svg>

                <h2
                  className="section-title ml-3 text-center sm:text-left"
                  dangerouslySetInnerHTML={{
                    __html: marked.parseInline(banner.frontmatter.banner.title),
                  }}
                ></h2>
              </div>
              <h1 className="order-last text-h1 font-semibold md:order-first 2xl:text-[2.4rem]">
                {banner.frontmatter.banner.bio}
              </h1>
            </div>

            <div className="order-first mx-auto block text-center md:order-last md:w-[50%] lg:w-4/5 xl:w-[55%] 2xl:w-4/5">
              <Image
                src={banner.frontmatter.banner.image}
                alt="author"
                width={251}
                height={278}
                quality={90}
                placeholder="blur"
                blurDataURL={banner.frontmatter.banner.image}
              />
            </div>
          </div>
          <div className="flex hidden flex-wrap items-center xl:flex-nowrap">
            {banner.frontmatter.banner.brands.map((brand) => (
              <div
                key={brand.logo}
                className="basis-1/2 pr-4 sm:basis-1/3 sm:pr-10 md:mr-0 md:basis-1/3 md:pr-12 lg:mr-12 lg:basis-1/4 lg:pr-0 xl:basis-auto 2xl:mr-16"
              >
                <Link href={brand.link} passHref>
                  <a
                    className="brand-item block"
                    target="_blank"
                    rel="noreferer"
                  >
                    <div className="hover-reveal overflow-hidden">
                      <div className="hover-reveal_inner">
                        <img
                          className="hover-reveal_img"
                          src={brand.preview}
                          alt="brand image"
                        />
                      </div>
                    </div>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-auto max-w-[170px]"
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-24">
        <Devider />
      </div>
    </>
  );
};

export default HeroSection;
