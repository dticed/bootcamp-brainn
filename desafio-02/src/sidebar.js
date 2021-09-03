function Sidebar({data, handleClick}) {
  return (
    <aside className="grid grid-aside">
      <section>
        <ul className="aside-links">
          {data.map(item => (
            <li key={item.id}>
              <a href={item.id} onClick={(event) => {
                event.preventDefault()
                handleClick(item.id)
              }}>{item.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
