function Button({ children, type, customStyle = "", onClick }) {
  const baseStyle = `${customStyle}  rounded-full text-[0.6rem] sm:text-xs md:text-sm  focus:outline-none focus:ring  focus:ring-offset-1 transition-all duration-300`;

  const style = {
    primary:
      baseStyle +
      " md:px-3 md:py-1 px-1.5 py-0.5 focus:ring-yellowbg bg-yellowbg font-bold hover:bg-yellow-300 text-greybg",
    secondary: baseStyle + "focus:ring-yellowbg text-white font-semibold z-0",
  };
  if (onClick)
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );

  return <button className={style[type]}>{children}</button>;
}

export default Button;
