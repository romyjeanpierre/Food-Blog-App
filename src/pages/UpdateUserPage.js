import{useState} from 'react'
import * as usersService  from '../utilities/users-service';

const UpdateUserPage = (user) =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '', 
        confirm: '',
    })

    const disable = formData.password !== formData.confirm;

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value, 
        });
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); 
        try {
            const userFormData = {...formData}
            delete userFormData.confirm
            usersService.updateUserPassword(userFormData, user.user._id)
            usersService.logOut()
        } catch (error) {
            console.log(error);
        }
    }


return <div>
    <div className="form-container" onSubmit={handleSubmit}>
      <form autoComplete="off" >
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} required />
        <label>Confirm:</label>
        <input type="text" name="confirm" value={formData.confirm} onChange={handleChange} required />
        <button type='submit' disabled={disable}>Update Password</button>
      </form>

    </div>
  </div>
}
  export default UpdateUserPage