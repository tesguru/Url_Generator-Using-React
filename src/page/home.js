import React from "react";
import Button from "../component/Button";
import Image1 from "../images/illustration-working.svg";
import Image2 from "../images/bg-shorten-desktop.svg";
import Card from "../component/Card";
import logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Pintrest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import boost from "../images/bg-boost-desktop.svg";
import axiosInstance from "../utils/axios";
import { useState } from "react";

const Home = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    console.log(url);

    try {
      const response = await axiosInstance.post(
        "https://cleanuri.com/api/v1/shorten",
        { url: url }
      );
      setShortenedUrl(response.data.result_url);
      console.log(shortenedUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
      // Handle errors appropriately
    }
  };
  return (
    <>
      <div className="w-auto shadow-lg px-10 md:px-16">
        <div className="container md:container-fluid mx-auto relative">
          <div className="grid grid-cols-2 pt-10 ">
            <div className="flex w-auto gap-8">
              <img src={logo} className="w-auto" />
              <ul className="md:flex w-auto flex-wrap hidden md:block gap-5">
                <li className="font-semibold text-gray">
                  <a>Features </a>
                </li>
                <li className="font-semibold text-gray">
                  <a>Pricing</a>
                </li>
                <li className="font-bold text-gray">
                  <a>Resources</a>
                </li>
              </ul>
            </div>
            <div className="md:flex  flex-wrap hidden md:block  md:w-auto justify-end gap-2 pr-[12rem]">
              <Button
                buttonColour={""}
                text={"Login"}
                textColour={"text-black"}
              />
              <Button
                buttonColour={"bg-Cyan"}
                text={"Sign up"}
                textColour={"text-white"}
              />
            </div>
          </div>

          <div className="flex pb-24 flex-col md:flex-row md:gap-[5rem] w-auto mt-9 md:mt-[6rem]">
            <div className="w-auto md:order-1 order-2 ">
              <p className="pt-[4rem] text-center md:text-left font-bold text-6xl">
                More than just shorter links
              </p>
              <p className="pt-[1rem] pb-[2rem] text-center md:text-left semi-bold text-gray text-1xl">
                Build your brand's recognition and get detailed insights on how
                your links are performing{" "}
              </p>
              <div className="flex pb-8 md:pb-0 justify-center md:justify-start">
                <Button
                  buttonColour={"bg-Cyan"}
                  text={"Get Started"}
                  textColour={"text-white"}
                />
              </div>
            </div>

            <div className="order-1  md:order-2  md:-mr-16">
              <img src={Image1} className="" />
            </div>
          </div>
          <form onSubmit={handleShortenUrl}>
            <div
              className="grid grid-cols-12 bg-VeryDarkBlue absolute rounded-[10px] left-2/4 -translate-x-2/4 -translate-y-[50%] w-[100%] py-10"
              style={{ backgroundImage: `url(${Image2})` }}
            >
              <div className="col-span-12 md:col-span-9 flex max-w-[100%] justify-center">
                <input
                  type="text"
                  name="url"
                  className="pl-3 py-2 w-full m-[1rem]"
                  placeholder="Shorten link here"
                />
              </div>
              <div className="col-span-12  md:col-span-3">
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-9 py-2 whitespace-nowrap rounded-[10px]  bg-Cyan text-white"
                  >
                    Shorten it
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="w-auto bg-gray  pt-40 px-10 max-w-[100%] mx-auto">
        <div className="flex gap-4">
        </div>
        <p className="pt-[4rem] text-center  font-bold text-4xl">
          Advance Statistics
        </p>
        <p className="pt-[1rem] pb-[2rem] text-center semi-bold text-red-500 text-1xl ">
          Track how your links are performing across the web with our advance
          statistics dashboard
        </p>

        <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center pb-[100px]  gap-6 p-[2rem]">
          <div className=" p-6 shadow-lg  bg-green-500 relative">
            <div className="w-16 h-16 rounded-full flex items-center  justify-center bg-zinc-700 absolute  top-0 -translate-y-2/4 -translate-x-[-250%]">
              <p className="text-white font-semibold text-lg">BM</p>
            </div>
            <p className="font-bold pt-5 text-1xl">Brand Recognition</p>
            <p>
              Boost your brand recognition with each click. Generic links dont
              mean a thing Branded links
            </p>
          </div>
      
          <div className=" p-6 shadow-lg   bg-green-500 relative lg:top-8">
            <div className="w-16 h-16  rounded-full flex items-center  justify-center bg-zinc-700 absolute left-0  -translate-x-[-250%] top-0 -translate-y-2/4 ">
              <p className="text-white font-semibold text-lg">BM</p>
            </div>
            <p className="font-bold pt-5 text-1xl">Detailed Records</p>
            <p>
             Gain insights into who is clicking your links.Knowing when and where people engage with your content helps informs better decision
            </p>
          </div>
     
          <div className=" p-6 shadow-lg   bg-green-500 relative lg:top-16">
            <div className="w-16 h-16  rounded-full flex items-center  justify-center bg-zinc-700 absolute -translate-x-[-200%] left-0 right-0 top-0 -translate-y-2/4">
              <p className="text-white font-semibold text-lg">BM</p>
            </div>
            <p className="font-bold pt-5 text-1xl">Brand Recognition</p>
            <p>
              Improve brand awareness and content discoverability through customizable links, superchanging audience and engagement
            </p>
          </div>
        
        </div>
      </div>
      <div
        className="py-9 max-w-[100%] text-center bg-VeryDarkBlue text-white "
        style={{ backgroundImage: `url(${boost})` }}
      >
        <p className="pb-5">Boost your Link</p>
        <Button
          buttonColour={"bg-Cyan"}
          text={"Get Started"}
          textColour={"text-white"}
        />
      </div>
      <div className=" grid  md:grid-cols-3 gap-2 bg-VeryDarkViolet">
        <div className="flex justify-center text-white">
          <p className="pt-9 text-2xl">Shortly</p>
        </div>
        <div className="flex flex-col pt-9 md:flex-row justify-center gap-4">
          <div className="text-center text-white md:text-start">
            <p>Features</p>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div className="text-center text-white md:text-start">
            <p>Resources</p>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>

          <div className="text-center text-white md:text-start">
            <p>Company</p>
            <p>About</p>
            <p>Our team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex">
          <image src={Facebook} />
          <image src={twitter} />
          <image src={Pintrest} />
          <image src={Instagram} />
        </div>
      </div>
    </>
  );
};

export default Home;
