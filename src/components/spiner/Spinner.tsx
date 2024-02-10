import { Spinner as SpinnerUI } from "@nextui-org/react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <section className="container-sniper">
      <SpinnerUI color="success" size="lg" />
    </section>
  );
};

export default Spinner;
