import * as React from "react";
import { Card } from "../cards/Card";
import { BackgroundOverlay } from "./styled";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { SmallButton } from "../buttons/SmallButton";

interface Props {
  onDismiss: () => void;
  onConfirm: () => void;
  visible: boolean;
  body: string;
  title: string;
  confirmText?: string;
  dismissText?: string;
}
export const ConfirmModal: React.FC<Props> = ({
  onDismiss,
  onConfirm,
  visible,
  body,
  title,
  confirmText = "Yes, quit",
  dismissText = "No, dismiss",
}) => {
  if (!visible) return null;
  return (
    <BackgroundOverlay>
      <Card centeredContent>
        <Font variant="h4" color="hilite_pink">
          {title}
        </Font>
        <Spacer />
        <Font align="center">{body}</Font>
        <Spacer h={30} />
        <SmallButton title={confirmText} onPress={onConfirm} />
        <Spacer />
        <SmallButton
          variant="outlined"
          title={dismissText}
          onPress={onDismiss}
        />
      </Card>
    </BackgroundOverlay>
  );
};
