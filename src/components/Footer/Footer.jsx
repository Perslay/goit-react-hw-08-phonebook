import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <address className={css.address}>
          <p className={css.paragraph}>Website created by Natalia Fedyk</p>
          <p className={css.paragraph}>
            Email:{' '}
            <a className={css.link} href="mailto:natalia.44.fedyk@gmail.com">
              natalia.44.fedyk@gmail.com
            </a>
          </p>
          <p className={css.paragraph}>
            Backend and react template provided by{' '}
            <a className={css.link} href="https://github.com/luxplanjay">
              Alexander Repeta
            </a>{' '}
            and{' '}
            <a className={css.link} href="https://goit.global/ua/">
              GOIT Academy
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
};
