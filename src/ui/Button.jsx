function Button({ children, type, customStyle = "", onClick }) {
  const baseStyle = `${customStyle}  rounded-full text-sm  focus:outline-none focus:ring  focus:ring-offset-1 transition-all duration-300`;

  const style = {
    primary:
      baseStyle +
      " px-3 py-1 focus:ring-yellowbg bg-yellowbg font-bold hover:bg-yellow-300 text-greybg",
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
