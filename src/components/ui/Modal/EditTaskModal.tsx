import React, { useEffect, useState, ChangeEvent } from "react";
import ModalWrapper from "./ModalWrapper";
import { Input } from "../Input";
import { Button } from "../Button";

interface EditTaskModalProps {
  isOpen: boolean;
  task: { id: number; text: string };
  onClose: () => void;
  onSave: (newText: string) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, task, onClose, onSave }) => {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(task.text);
    setIsEditing(false); 
  }, [task]);

  if (!isOpen) return null;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setText(newValue);
    setIsEditing(newValue !== task.text && newValue.trim().length > 0);
  };

  const handleSave = () => {
    if (isEditing) {
      onSave(text);
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-[3rem] font-semibold text-gray-800 text-center">Edit Task</h2>
        

        <Input
          value={text}
          onChange={handleOnChange}
          className="w-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#5A877D] transition-all duration-200"
        />

        <div className="flex justify-end space-x-3 pt-2">
          <Button
            onClick={onClose}
            className="bg-black text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isEditing}
            className={`bg-[#237261] text-white transition-opacity duration-200 ${
              isEditing ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
          >
            Save
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditTaskModal;
