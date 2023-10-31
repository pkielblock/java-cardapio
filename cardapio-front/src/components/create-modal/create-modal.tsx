import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./create-modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = { title, price, image };

    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [closeModal, isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre Um Novo Item No Cardápio</h2>
        <form className="input-container">
          <Input label="Titulo" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Link da Imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          {isLoading ? "Registrando..." : "Registrar"}
        </button>
      </div>
    </div>
  );
}
