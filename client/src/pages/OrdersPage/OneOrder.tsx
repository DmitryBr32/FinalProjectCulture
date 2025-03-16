import { useState } from "react";
import styles from "./OrdersPage.module.css";
import { Order } from "./OrdersPage";
import { useNavigate } from "react-router";
import { changeStatusOrder, deleteOrder } from "@/shared/api/api";

type Props = {
  order: Order;
  deleteOneOrder(id: number): void;
  isAdmin?: boolean;
};

export function OneOrder({ order, deleteOneOrder, isAdmin }: Props) {
  const defaultStatus =
    order.status === "pending" ? "заказ принят" : order.status;
  const [status, setStatus] = useState(defaultStatus);
  const navigate = useNavigate();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  function calculateTotalOrderAmount(order: Order): number {
    return order.basket.reduce((total, item) => {
      const price = parseFloat(item.Product.price);
      return total + price * item.quantity;
    }, 0);
  }

  async function onChangeStatus() {
    const response = await changeStatusOrder(order.id, status);
    console.log(response);
  }

  async function onClickDelete() {
    const response = await deleteOrder(order.id);
    console.log(response);
    deleteOneOrder(order.id);
  }

  return (
    <div key={order.id} className={styles.order}>
      <h2>Заказ №{order.id}</h2>
      <p>
        <strong>Адрес:</strong> {order.address}
      </p>
      <p>
        <strong>Комментарий:</strong> {order.comment}
      </p>
      <p>
        <strong>Дата заказа:</strong>{" "}
        {new Date(order.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Получатель:</strong> {order.recipient}
      </p>
      <p>
        <strong>Телефон:</strong> {order.telephone}
      </p>
      <h3>Товары:</h3>
      <ul>
        {order.basket.map((item) => (
          <li key={item.id}>
            <p>
              <strong>Товар:</strong> {item.Product.name}
            </p>
            <p>
              <strong>Количество:</strong> {item.quantity}
            </p>
            <p>
              <strong>Цена за штуку:</strong> {item.Product.price} руб.
            </p>
            <button>
              <div
                key={item.Product.id}
                className={styles.product}
                onClick={() => navigate(`/product/${item.Product.id}`)}
              >
                Карточка товара
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Общая сумма заказа:</strong>{" "}
        {calculateTotalOrderAmount(order).toFixed(2)} руб.
      </p>
      {!isAdmin && 
      <p>
        Статус заказа: {order.status}
        </p>}
      {isAdmin && (
        <div>
      <p>
        <strong>Статус:</strong>
        <input onChange={onChangeHandler} value={status} type="text" />
      </p>
        <div className={styles.buttonBlock}>
          <button onClick={onChangeStatus}>Изменить стаус</button>
          <button onClick={onClickDelete} className={styles.buttonDelete}>
            Удалить
          </button>
        </div>
        </div>
      )}
    </div>
  );
}
