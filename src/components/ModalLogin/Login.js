import React,{useState} from 'react'
import Modal from '../Modal/Modal'
import { handleLogin } from "../../redux/actions/auth";
import { connect } from "react-redux";
const Login = ({HandleLogin,handleLogin,Register,Loginaksen,auth:{error,loading}}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password,Loginaksen);
      };

  return (
    <div >
        {HandleLogin ? (
        <div onClick={() => Loginaksen()} className="back-drop" />
      ) : null}
      <Modal className="modal" show={HandleLogin}>
          <h1>LOGIN</h1>
          <p>{error}</p>
          <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => onChange(e)}
                    placeholder='Password'
                    className='custom-input'
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      LOGIN
                  </button>
              </div>
            
          </form>
          <p onClick={()=>Register()}>Dont have an Account? Click Me</p>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleLogin })(Login);
