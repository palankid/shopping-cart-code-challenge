import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import Button from "../Button";
import Section from "./Section";
import Typography from "../Typography";
import ModalHeading from "./ModalHeading";

export default {
  title: "components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <>
      <Button onClick={handleClick}>Open Modal</Button>
      <Modal {...args} visible={visible} onClose={handleClose}>
        <ModalHeading title="Header section" />
        <Section padding="0">
          <div
            style={{
              padding: "1rem 0",
              border: "1px solid lightGray",
              borderWidth: "1px 0 1px 0",
            }}
          >
            <Section>
              <Typography variant="subheading1">
                This is an extended content
              </Typography>
            </Section>
          </div>
        </Section>
        <Section>
          <Button variant="outlined" onClick={handleClose}>
            Close Modal
          </Button>
        </Section>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const CloseClickOutside = Template.bind({});
CloseClickOutside.args = { disableClickOutside: false };
