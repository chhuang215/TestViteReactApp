import "./FooterPop.css";

export default function FooterPop(props) {
  let open = props.open;

  return (
    <>
      <div className={`wrapper ${open ? '' : 'wrapperclose'}`}>
        <h1>Popup Here</h1>
      </div>
    </>
  );
}