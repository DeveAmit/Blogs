// Sample data for news feeds
const newsData = [
    { title: 'News 1', content: 'Content for News 1' },
    { title: 'News 2', content: 'Content for News 2' },
    { title: 'News 3', content: 'Content for News 3' },
    { title: 'News 4', content: 'Content for News 4' },
    { title: 'News 5', content: 'Content for News 5' },
    { title: 'News 6', content: 'Content for News 6' },
    { title: 'News 7', content: 'Content for News 7' }
  ];
  
  // Sample data for upcoming events
  const eventData = [
    { title: 'Event 1', date: 'June 15, 2023' },
    { title: 'Event 2', date: 'June 20, 2023' },
    { title: 'Event 3', date: 'June 25, 2023' },
    { title: 'Event 4', date: 'July 1, 2023' },
    { title: 'Event 5', date: 'July 5, 2023' }
  ];
  
  // Sample data for job postings
  const jobData = [
    { title: 'Job 1', description: 'Description for Job 1' },
    { title: 'Job 2', description: 'Description for Job 2' },
    { title: 'Job 3', description: 'Description for Job 3' },
    { title: 'Job 4', description: 'Description for Job 4' },
    { title: 'Job 5', description: 'Description for Job 5' },
    { title: 'Job 6', description: 'Description for Job 6' },
    { title: 'Job 7', description: 'Description for Job 7' }
  ];
  
  // Function to create articles
  function createArticle(title, content) {
    const article = document.createElement('div');
    article.classList.add('article');
  
    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
  
    const articleContent = document.createElement('p');
    articleContent.textContent = content;
  
    article.appendChild(articleTitle);
    article.appendChild(articleContent);
  
    return article;
  }
  
  // Function to populate news feeds section
  function populateNewsFeeds() {
    const newsContainer = document.getElementById('news-container');
    newsData.forEach(data => {
      const article = createArticle(data.title, data.content);
      newsContainer.appendChild(article);
    });
  }
  
  // Function to populate upcoming events section
  function populateUpcomingEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventData.forEach(data => {
      const article = createArticle(data.title, `Date: ${data.date}`);
      eventsContainer.appendChild(article);
    });
  }
  
  // Function to populate job postings section
  function populateJobPostings() {
    const jobsContainer = document.getElementById('jobs-container');
    jobData.forEach(data => {
      const article = createArticle(data.title, data.description);
      jobsContainer.appendChild(article);
    });
  }
  
  // Call the functions to populate the sections
  populateNewsFeeds();
  populateUpcomingEvents();
  populateJobPostings();
  