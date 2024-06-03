import { Helmet } from 'react-helmet';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Online phonebook. Save phone numbers with names and manage them."
        />
        <meta name="keywords" content="phonebook, phonenumber, contacts" />
      </Helmet>
      <h2 className={css.heading}>Home page</h2>
      <p>
        Welcome to your own online phonebook. Save phone numbers with names and
        manage them.
      </p>
      <p>
        Start by creating or logging in to your own account and choose the
        'Contacts' option at the top of the page.
      </p>
    </div>
  );
};

export default Home;
