import Article from "../Article/Article";

const ArticleList = ({ items }) => {
  return (
    <ul>
      {items &&
        items.map((item) => {
          return (
            <li key={item.objectID}>
              <Article item={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default ArticleList;
