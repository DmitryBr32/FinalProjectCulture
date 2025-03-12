export default function Bar() {
  return (
    <div>
      <div>
        <img
          src="https://torgpit.ru/upload/images/stories/kartinki/bisnes-plan/otkritie-bara.jpg"
          alt=""
        />
        {userIngrs.map((userIngr) => (
          <div>
            <h4>{userIngr.name}</h4>
            <p>{userIngr.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
