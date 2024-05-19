function CarouselListItem({
  isImgHeading = false,
  imgHeading = "",
  subHeading = "",
  img,
  isActive = false,
  type = "large",
}) {
  const baseStyle = ` rounded-lg  ${isImgHeading ? "flex flex-col items-start gap-1" : ""}`;
  const style = {
    large:
      baseStyle +
      "min-h-[18rem] min-w-[12rem] md:min-h-[24rem] md:min-w-[14rem]",
    small:
      baseStyle + "min-h-[8rem] min-w-[5rem] md:min-h-[10rem] md:min-w-[6rem]",
  };

  return (
    <div className={style[type]}>
      {isImgHeading && (
        <div className="text-white">
          <h3 className="text-lg">{imgHeading}</h3>
          <p className="text-sm ">{subHeading}</p>
        </div>
      )}

      <img
        src={img}
        alt="carouse image"
        className={`h-full w-full transition-all hover:scale-[1.02] ${isActive ? "scale-[1.05]" : ""}`}
      />
    </div>
  );
}

export default CarouselListItem;
