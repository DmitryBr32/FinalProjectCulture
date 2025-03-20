import { useState } from "react";
import styles from "./OrdersPage.module.css";
import { Order } from "./OrdersPage";
import { useNavigate } from "react-router";
import { changeStatusOrder, deleteOrder } from "@/shared/api/api";
import { useAlert } from "@/features/alert";

type Props = {
  order: Order;
  deleteOneOrder(id: number): void;
  isAdmin?: boolean;
};

export function OneOrder({ order, deleteOneOrder, isAdmin }: Props) {
  const defaultStatus = order.status;
  const [status, setStatus] = useState(defaultStatus);
  const navigate = useNavigate();
  const { showAlert } = useAlert();


  const statusOptions = [
    "заказ принят",
    "заказ в обработке",
    "товар отправлен покупателю",
  ];

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  function calculateTotalOrderAmount(order: Order): number {
    return order.basket.reduce((total, item) => {
      const price = parseFloat(item.Product.price);
      return total + price * item.quantity;
    }, 0);
  }

  async function onChangeStatus() {
    await changeStatusOrder(order.id, status);
    showAlert(`Статус заказа №${order.id} изменен на "${status}"`)
  }

  async function onClickDelete() {
    await deleteOrder(order.id);
    deleteOneOrder(order.id);
  }

  return (
    <div className={styles.order}>
      <h2 className={styles.numberOrder}>Заказ №{order.id}</h2>

      <div className={styles.clientInfo}>
        <p>
          <strong>Адрес:</strong> {order.address}
        </p>
        <p>
          <strong>Комментарий:</strong> {order.comment}
        </p>
        <p>
          <strong>Дата доставки:</strong>{" "}
          {new Date(order.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Получатель:</strong> {order.recipient}
        </p>
        <p>
          <strong>Телефон:</strong> {order.telephone}
        </p>
      </div>

      {/* Список товаров */}
      <div className={styles.productsList}>
        {order.basket.map((item) => (
          <div key={item.id} className={styles.productItem}>
            <p>
              <strong>{item.Product.name}</strong> x {item.quantity}
            </p>
            <p>{item.Product.price} руб.</p>
            <button className={styles.productCardButton}
              onClick={() =>
                navigate(`/shop/${item.Product.id}?isOpenModal=true`)
              }
            >
              Карточка товара
            </button>
          </div>
        ))}
      </div>

      {/* Блок для пользователя и админа */}
      {isAdmin ? (
        <div className={styles.adminControls}>
          <p className={styles.totalAmount}>
            <strong>Общая сумма:</strong>{" "}
            {calculateTotalOrderAmount(order).toFixed(2)} руб.
          </p>
          <div className={styles.buttonBlock}>
            <select onChange={onChangeHandler} value={status}>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={onChangeStatus}>Изменить статус</button>
            <button onClick={onClickDelete} className={styles.buttonDelete}>
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.statusAndTotal}>
          <p className={styles.currentStatus}>
            <strong>Текущий статус:</strong> {status}
          </p>
          <p className={styles.totalAmount}>
            <strong>Общая сумма:</strong>{" "}
            {calculateTotalOrderAmount(order).toFixed(2)} руб.
          </p>
        </div>
      )}
    </div>
  );
}
