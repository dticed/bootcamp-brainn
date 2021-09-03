import { Heading3 } from "./headings";

function Main({title, content}) {
  return (
    <main className="grid grid-main">
      <Heading3 children={title} />
      <article>
        <p>
          {content}
        </p>
      </article>
    </main>
  );
}

export default Main;
