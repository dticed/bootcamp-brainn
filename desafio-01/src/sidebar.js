import Button from "./button";

function Sidebar() {
  return (
    <aside className="grid grid-aside">
      <section>
        <Button kind="primary" text="Github" />
        <Button kind="primary" text="Linkedin" />
        <Button kind="primary" text="Twitter" />
        <Button kind="secondary" text="Gitlab" />
        <Button kind="secondary" text="StackOverFlow" />
        <Button kind="secondary" text="Facebook" />
      </section>
    </aside>
  );
}

export default Sidebar;
