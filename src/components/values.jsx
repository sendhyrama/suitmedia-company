import React from "react";
// import Background from "../img/bg.jpg";

const dataValues = [
  {
    id: 1,
    title: "innovative",
    description:
      "Lorem ipsum dolor sit amet, consectur adipisicing elit. Maxime exercitationem dolorem deserunt,unde eaque ipsa?",
    image: "lightbulb-o.png",
  },
  {
    id: 2,
    title: "Loyalty",
    description:
      "Lorem ipsum dolor sit amet, adipisicing elit. Impedit simillique eum itaque facere temporibus dolores.",
    image: "bank.png",
  },
  {
    id: 3,
    title: "respect",
    description:
      "Lorem ipsum dolor sit amet, consectetur. adipisicing elit. Consequatur, sit? Tenetur et naque quod incidunt!",
    image: "balance-scale.png",
  },
];

function Values() {
  return (
    <main className="w-full px-20 xl:px-0 flex flex-col relative justify-center items-center mt-10 lg:h-[600px] ">
      <h1 className="font-bold text-2xl py-5">OUR VALUES</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        {dataValues.map((data, index) => {
          return (
            <div
              key={data.id}
              className={`content relative border-2 ${
                data.id === 1
                  ? "bg-red-500/[0.7]"
                  : data.id === 2
                  ? "bg-green-700/[0.7]"
                  : "bg-sky-600/[0.7]"
              } py-10 px-10 flex flex-col text-white justify-center items-center text-center w-auto xl:w-96 h-auto`}>
              <img
                className="h-8 p-1"
                src={require(`../../public/assets/${data.image}`)}
                alt={data.title}
              />
              <h3 className="font-semibold uppercase my-3 text-xl">
                {data.title}
              </h3>
              <p className="text-base leading-relaxed">{data.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default Values;
