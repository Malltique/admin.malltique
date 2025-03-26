import { Modal, Text, Group } from "@mantine/core";
import { Button } from "../_ui";

interface DeleteModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export const DeleteModal = ({ opened, onClose, onConfirm, loading }: DeleteModalProps) => (
  <Modal opened={opened} onClose={onClose} title="Delete Products" overlayBlur={2}>
    <Text size="sm" mb="md">
      Are you sure you want to delete the selected products? This action cannot be undone.
    </Text>

    <Group>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onConfirm}>Delete</Button>
    </Group>
  </Modal>
);
