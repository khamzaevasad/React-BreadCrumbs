import { NavLink } from 'react-router-dom';
import { UseFetch } from '../hooks/UseFetch';

function Articles() {
  const {
    data: articles,
    isPending,
    error,
  } = UseFetch('http://localhost:3000/articles');
  return (
    <div className="article-container">
      {isPending && <h3>Loading..</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h3>Title: {article.title}</h3>
              <p>
                <b>Author:</b> {article.author}
              </p>

              <NavLink to={`/articles/${article.id}`}>Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
