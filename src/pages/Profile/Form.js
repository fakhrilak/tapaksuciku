import React,{useEffect, useState} from 'react'
import Modal from "../../components/Modal/Modal"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {postKejuaraan,patchKejuaraan} from "../../redux/actions/kejuaraan"
import {Reset} from "../../redux/actions/clear"
import {connect} from "react-redux"
const Form = ({tambah,
    postKejuaraan,
    setTambah,
    kejuaraan:{error,message,kejuaraanId},
    edit,
    patchKejuaraan,
    setEdit,
    Reset
}) => {
    const [value, OnChange] = useState(new Date());
    const [formData, setFormData] = useState({
        nama: "",
        lokasi:""
      });
    useEffect(()=>{
        if (message){
            alert(message)
            setFormData({
                nama: "",
                lokasi:""   
            })
            Reset()
        }
    },[message,error])
    const { nama,lokasi } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(tambah){
            postKejuaraan(nama,value,lokasi)
            setTimeout(()=>{
             Reset()   
            },3000)
            
        }else if(edit){
            patchKejuaraan(nama,value,lokasi)
        }
       
      };
    return (
        <div>
            <div>
            {tambah ? (
            <div onClick={() => setTambah()} className="back-drop" />
            ) : null}
            <Modal className="modal" show={tambah}>
                <h2>TAMBAH PERTANDINGAN</h2>
                <p>{error}</p>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            type="text"
                            placeholder="Nama Kejuaraan"
                            value={nama}
                            name="nama"
                            onChange={(e) => onChange(e)}
                            className='custom-input'
                            />
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            placeholder="Lokasi"
                            value={lokasi}
                            name="lokasi"
                            onChange={(e) => onChange(e)}
                            className='custom-input'
                            />
                    </div>
                    <div className='form-group'>
                        <Calendar
                        onChange={OnChange}
                        value={value}
                        />
                    </div>
                    <div className='form-submit'>
                        <button
                            className='btn-submit'
                        >
                            SUBMIT
                        </button>
                    </div>                   
                </form>
            </Modal>
            </div>
            <div>
            {edit ? (
            <div onClick={() => setEdit()} className="back-drop" />
            ) : null}
            <Modal className="modal" show={edit}>
                <h2>EDIT PERTANDINGAN</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            type="text"
                            placeholder={kejuaraanId.nama}
                            value={nama}
                            name="nama"
                            onChange={(e) => onChange(e)}
                            className='custom-input'
                            />
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            placeholder={kejuaraanId.lokasi}
                            value={lokasi}
                            name="lokasi"
                            onChange={(e) => onChange(e)}
                            className='custom-input'
                            />
                    </div>
                    <div className='form-group'>
                        <Calendar
                        onChange={OnChange}
                        value={value}
                        />
                    </div>
                    <div className='form-submit'>
                        <button
                            className='btn-submit'
                        >
                            SUBMIT
                        </button>
                    </div>                   
                </form>
            </Modal>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    kejuaraan : state.kejuaraan
  });
  
  export default connect(mapStateToProps, {postKejuaraan,patchKejuaraan,Reset})(Form);