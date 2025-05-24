export default function Article(props) {
  console.log(props);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Page des articles</h1>
      <h2>{props.params.title}</h2>
    </main>
  );
}
