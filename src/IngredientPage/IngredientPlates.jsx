import React from "react";

const IngredientPlates = ({
  openIntroHandler,
  plate,
  ingredients,
  ingredientsImg,
}) => {
  return (
    <>
      <div
        className={`absolute top-[15%] left-[42%] flex flex-col justify-center items-center w-[320px] h-[320px] cursor-pointer`}
        onClick={() => openIntroHandler(0)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="pt-[8px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[0].name}
          </h1> */}
          <img src={ingredientsImg[0]} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[0].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[5%] left-[22%] flex flex-col justify-center items-center w-[280px] h-[280px] cursor-pointer`}
        onClick={() => openIntroHandler(1)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[8px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[1].name}
          </h1> */}
          <img src={ingredientsImg[1]} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[1].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[8%] left-[63%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() => openIntroHandler(2)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[2].name}
          </h1> */}
          <img src={ingredientsImg[2]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[2].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[41%] left-[62%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() => openIntroHandler(3)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[3].name}
          </h1> */}
          <img src={ingredientsImg[3]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[3].counts / 120 *100).toFixed(0)}%
            </h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[43%] left-[32%] flex flex-col justify-center items-center w-[180px] h-[180px] cursor-pointer`}
        onClick={() => openIntroHandler(4)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[4].name}
          </h1> */}
          <img src={ingredientsImg[4]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[4].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[65%] left-[41%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(5)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[5].name}
          </h1> */}
          <img src={ingredientsImg[5]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] leading-[1]">
              {(ingredients[5].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[30%] left-[75%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(6)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[6].name}
          </h1> */}
          <img src={ingredientsImg[6]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] ">
              {(ingredients[6].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[60%] left-[52%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(7)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[7].name}
          </h1> */}
          <img src={ingredientsImg[7]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] ">
              {(ingredients[7].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[28%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(8)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[8].name}
          </h1> */}
          <img src={ingredientsImg[8]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] leading-[1]">
              {(ingredients[8].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[45%] left-[19%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(9)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[9].name}
          </h1> */}
          <img src={ingredientsImg[9]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] leading-[1]">
              {(ingredients[9].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[21%] left-[11%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(10)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[10].name}
          </h1> */}
          <img src={ingredientsImg[10]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[10].counts / 120 *100).toFixed(0)}%
            </h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[58%] left-[76%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(11)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[11].name}
          </h1> */}
          <img src={ingredientsImg[11]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] leading-[1]">
              {(ingredients[11].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[12%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(12)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[12].name}
          </h1> */}
          <img src={ingredientsImg[12]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px] leading-[1]">
              {(ingredients[12].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[1%] left-[6%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(13)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[18px] text-main tracking-[1.5px]">
            {ingredients[13].name}
          </h1> */}
          <img src={ingredientsImg[13]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[13].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[50%] left-[6%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(14)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[14].name}
          </h1> */}
          <img src={ingredientsImg[14]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[14].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[12%] left-[81%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(15)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[15].name}
          </h1> */}
          <img src={ingredientsImg[15]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[15].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[61%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(16)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[16].name}
          </h1> */}
          <img src={ingredientsImg[16]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[16].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[44%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(17)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[17].name}
          </h1> */}
          <img src={ingredientsImg[17]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[17].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[80%] left-[71%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(18)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[18].name}
          </h1> */}
          <img src={ingredientsImg[18]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[18].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(19)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {ingredients[19].name}
          </h1> */}
          <img src={ingredientsImg[19]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[18px] tracking-[1.5px]">
              {(ingredients[19].counts / 120 *100).toFixed(0)}%
            </h3>

          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientPlates;
