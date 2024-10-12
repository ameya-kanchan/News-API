import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then(response => {
        setArticles(response.data);
        setLoading(false); //Loading Time is finished
      })
      .catch(error => {
        console.error("There was an error fetching the news!", error); //Error Handling
        setError("Unable to fetch news. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={styles.center}>Loading news...</h2>;
  }

  if (error) {
    return <h2 style={styles.center}>{error}</h2>;
  }

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>Top Headlines</h1>
      <div style={styles.articleContainer}>
        {articles.map((article, index) => (
          <div key={index} style={styles.articleCard}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} style={styles.image} />
            )}
            <div style={styles.articleContent}>
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <p><strong>Source:</strong> {article.source.name}</p>
              <p><strong>Published at:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
              <a href={article.url} style={styles.link} target="_blank" rel="noopener noreferrer">
                Read full article
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  articleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  articleCard: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  articleCardHover: {
    transform: 'scale(1.05)',
  },
  articleContent: {
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  articleTitle: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
    fontSize: '1.5em',
  },
};

export default App;