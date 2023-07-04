import "./styles.css";

const NameInput = ({ username, setName }) => {
  const handleNameSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const inputName = e.target[0].value;
    localStorage.setItem("username", inputName);
    setName(inputName);
  };

  return (
    <>
      <form
        onSubmit={handleNameSubmit}
        className={username ? "hidden" : "nameForm"}
      >
        <input
          id="name"
          placeholder="What's your name?"
          type="text"
          name="name"
          autoComplete="off"
          required
        />
      </form>
    </>
  );
};

export default NameInput;
