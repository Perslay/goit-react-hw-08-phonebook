import { Helmet } from 'react-helmet-async';
import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to the home page of the online phonebook. Log in and manage your own phonebook."
        />
        <meta name="keywords" content="home, phonebook" />
      </Helmet>
      <h2 className={css.heading}>Home page</h2>
      <div className={css.text}>
        <p>
          Welcome to your own online phonebook. Save phone numbers with names
          and manage them.
        </p>
        <p>
          Start by creating or logging in to your own account and choose the
          'Contacts' option at the top of the page.
        </p>
      </div>
    </main>
  );
};

export default Home;
