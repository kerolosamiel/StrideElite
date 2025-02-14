function Button({ classN, handleClick, content }) {
  return (
    <button className={classN} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
