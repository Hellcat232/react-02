const Article = ({ item }) => {
  return (
    <>
      <a href={item.url} target="_blank" />
      <p>{item.title}</p>
    </>
  );
};

export default Article;
