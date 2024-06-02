import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations/auth';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  // const dispatch = useDispatch();
  // const [form, setForm] = useState({ name: '', email: '', password: '' });
  // const { loading, error } = useSelector(state => state.auth);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setForm(prevForm => ({ ...prevForm, [name]: value }));
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // const form = event.currentTarget;
  //   // dispatch(
  //   //   register({
  //   //     name: form.elements.name.value,
  //   //     email: form.elements.email.value,
  //   //     password: form.elements.password.value,
  //   //   })
  //   // );
  //   dispatch(register(form));
  //   setForm({ name: '', email: '', password: '' });
  //   // form.reset();
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="register-name">Username</label>
        <input type="text" name="name" id="register-name" />
      </div>
      <div>
        <label htmlFor="register-email">Email</label>
        <input type="text" name="email" id="register-email" />
      </div>
      <div>
        <label htmlFor="register-password">Password</label>
        <input type="text" name="password" id="register-password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
