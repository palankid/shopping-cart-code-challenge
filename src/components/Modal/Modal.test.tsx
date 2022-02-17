import { fireEvent, render } from "@testing-library/react";
import Button from "components/Button";

import Modal from "./Modal";
import ModalHeading from "./ModalHeading";
import Section from "./Section";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

describe("Modal", () => {
  describe("decrease button click events", () => {
    const handleClose = jest.fn();

    test("modal should be hidden", () => {
      const { queryByText } = render(
        <Modal maxWidth="lg" onClose={handleClose} visible={false}>
          <ModalHeading title="Modal Title" />
          <Section>
            <Button onClick={handleClose}>Close</Button>
          </Section>
        </Modal>
      );
      const title = queryByText("Modal Title");

      expect(title).not.toBeInTheDocument();
    });

    test("modal should be visible", () => {
      const { queryByText } = render(
        <Modal maxWidth="lg" onClose={handleClose} visible={true}>
          <ModalHeading title="Modal Title" />
          <Section>
            <Button onClick={handleClose}>Close</Button>
          </Section>
        </Modal>
      );
      const title = queryByText("Modal Title");

      expect(title).toBeInTheDocument();
    });

    test("clicking on the close button should trigger the close event handler", () => {
      const { getByText } = render(
        <Modal maxWidth="lg" onClose={handleClose} visible={true}>
          <ModalHeading title="Modal Title" />
          <Section>
            <Button onClick={handleClose}>Close</Button>
          </Section>
        </Modal>
      );
      const button = getByText("Close");

      fireEvent.click(button);

      expect(handleClose).toHaveBeenCalled();
    });
  });
});
