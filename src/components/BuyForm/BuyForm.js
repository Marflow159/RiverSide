import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

import OrderDishes from '../orderDishes/OrderDishes';
import { useDispatch, useSelector } from 'react-redux';

import './buyForm.scss'
import line from '../resources/img/navImg/Line.png'

const BuyForm = () => {

    const { orderDishes } = useSelector(state => state.foods);

    const swapFooter = () => {
        localStorage.setItem("footerOn", false)
        const footerOn = localStorage.getItem("footerOn")
        if (footerOn === `false`) {
            document.querySelector(`.mainBgForm`).className = 'mainBgFooter'
            document.querySelector(`.footer`).className = `footer footerActive`
            document.querySelector(`.buyForm`).className = `buyForm footerNoActive`
        }
    }

    const sumAll = () => {
        let sum = 0;

        orderDishes.map(({ count, price }) => {
            sum += count * price
        })

        return sum.toFixed(2);
    }

    const footerOn = localStorage.getItem("footerOn");
    let clazz = `buyForm footerNoActive`;
    if(footerOn === `true`){
        clazz = 'buyForm footerActive'
    } else if(footerOn === `false`){
        clazz = 'buyForm footerNoActive'
    }

    return (
        <div className={clazz}>
            <div>
                <button className='butNone' onClick={() => swapFooter()}><img src={line} alt="" /></button>
            </div>
            <div className='formLine'>
                <h2>Checkout</h2>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    address: '',
                    house: '',
                    entrance: '',
                    apartment: '',
                    note: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2)
                        .required(),
                    phone: Yup.number()
                        .required(),
                    address: Yup.string()
                        .min(2)
                        .required(),
                    house: Yup.number()
                        .min(1)
                        .required(),
                    entrance: Yup.number()
                        .min(1),
                    apartment: Yup.number()
                        .min(1),
                    note: Yup.string()
                        .min(2)
                })}
                onSubmit={values => console.log(values)}>

                {({ errors, touched }) => (
                    <Form className='formik'>
                        <div className='formik__margins'>
                            <label htmlFor="name">Name <span>*</span></label>
                            <Field
                                placeholder='Enter Your Name'
                                id='name'
                                name='name'
                                type='text'
                                className={errors.name && touched.name ? `errorBorder` : `notErrorBorder`} />
                        </div>

                        <div className='formik__margins'>
                            <label htmlFor="phone">Phone number <span>*</span></label>
                            <Field
                                placeholder='Enter Your Phone'
                                id='phone'
                                name='phone'
                                type='text'
                                className={errors.phone && touched.phone ? `errorBorder` : `notErrorBorder`} />
                        </div >

                        <div className='formik__margins'>
                            <label htmlFor="address">Address <span>*</span></label>
                            <Field
                                placeholder='Enter Your Address'
                                id='address'
                                name='address'
                                type='text'
                                className={errors.address && touched.address ? `errorBorder` : `notErrorBorder`} />
                        </div>


                        <div className='formik__house'>
                            <div>
                                <label htmlFor="house">House <span>*</span></label>
                                <Field
                                    placeholder='Enter Your House'
                                    id='house'
                                    name='house'
                                    type='text'
                                    className={errors.house && touched.house ? `errorBorder` : `notErrorBorder`} />
                            </div>

                            <div>
                                <label htmlFor="entrance">Entrance</label>
                                <Field
                                    placeholder='Enter Your Entrance'
                                    id='entrance'
                                    name='entrance'
                                    type='text'
                                    className={errors.entrance && touched.entrance ? `errorBorder` : `notErrorBorder`} />
                            </div>

                            <div>
                                <label htmlFor="apartment">Apartment</label>
                                <Field
                                    placeholder='Enter Your Apartment'
                                    id='apartment'
                                    name='apartment'
                                    type='text'
                                    className={errors.apartment && touched.apartment ? `errorBorder` : `notErrorBorder`} />
                            </div>
                        </div>

                        <div className='formik__margins'>
                            <label htmlFor="note">Delivery Note</label>
                            <Field
                                placeholder='Order Note'
                                id='note'
                                name='note'
                                type='textarea'
                                className={errors.note && touched.note ? `errorBorder` : `notErrorBorder`} />
                        </div>

                        <div className='formik__ordersDishes'>
                            <OrderDishes />
                        </div>

                        <div className='formik__button'>
                            <div className='formik__button__sub'><span>Sub total</span> <span>${sumAll()}</span></div>
                            <button className='butNone' type='submit'>Order</button>
                        </div>

                    </Form>)}
            </Formik>
        </div>
    )
}

export default BuyForm;