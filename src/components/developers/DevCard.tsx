import React from "react";
import repo from "../../assets/img/repo.svg";
import star from "../../assets/img/star.svg";
import fork from "../../assets/img/fork.svg";
import image from "../../assets/img/image.jpeg";
import fire from "../../assets/img/fire.svg";
import heart from "../../assets/img/heart.svg";

const Repositories: React.FC = () => {
  return (
    <section className="border border-t-0 border-solid border-borderCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none">
      <div className="flex w-full justify-between my-2">
        <div className="flex">
          <span>1. </span>
          <div className="md:w-14 ml-4 md:pt-14 md:h-14 w-10 h-10 pt-10 relative rounded-full overflow-hidden">
            <img
              src={image}
              className="absolute object-cover h-full w-full top-0 left-0"
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex text-sm ml-4 justify-around md:ml-0 flex-wrap">
          <div className="mb-2 flex-grow ml-4">
            <h2 className="text-xl md:text-2xl text-linkCol font-bold">
              <a href="#">Felix Angelov</a>
            </h2>
            <p className="text-base">felangel</p>
          </div>
          <div className=" md:w-1/3 ml-4 md:ml-8 w-full flex-grow order-2 md:order-2 xs:order-3">
            <div className="mb-1">
              <img
                className="w-4 h-4 inline-block -mt-0.5"
                src={fire}
                alt="repo svg"
              />
              <a href="/" className="uppercase font-light ml-1">
                popular repo
              </a>
            </div>
            <div className="mt-1">
              <img
                className="w-4 h-4 inline-block -mt-0.5"
                src={repo}
                alt="repo svg"
              />
              <a href="/" className=" ml-1 md:ml-2 text-linkCol font-bold">
                tldraw
              </a>
            </div>
            <p className="mt-1 w-full xs:w-3/4 md:w-full mb-2">
              A tiny little drawing app dfsfhk fsajlfkcklfs cfjkl alksfjc
              lajlksj dgklsj gfj klsfj lk jdaljf lcsjklfnkl jdxlkcgnv
              lcxzvlkzlxjfv lcanxzlnfv lcznx¬ klj
            </p>
          </div>
          <div className=" info md:w-1/3 text-left ml-4 xs:ml-0 w-full xs:w-auto xs:text-right order-3 md:order-3 xs:order-2 text-sm">
            <button className="capitalize py-1 px-2 mr-2 border border-solid inline rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
              <img src={heart} className="inline mr-2" alt="star" />
              sponsor
            </button>
            <button className="capitalize inline py-1 px-2 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol">
              follow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;