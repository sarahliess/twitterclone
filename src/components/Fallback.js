function Fallback() {
  return (
    <div className="Fallback">
      <div className="FallbackInner">
        Oops. Nothing to see here yet. But check out{" "}
        <a className="FallbackHighlight" href="/">
          Home
        </a>{" "}
        and{" "}
        <a className="FallbackHighlight" href="/login">
          Profile
        </a>
        !
      </div>
    </div>
  );
}

export default Fallback;
