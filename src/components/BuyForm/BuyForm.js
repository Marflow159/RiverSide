import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

import { useDispatch, useSelector } from 'react-redux';

import './buyForm.scss'
import line from '../resources/img/navImg/Line.png'

const BuyForm = () => {

    const { orderDishes } = useSelector(state => state.foods);
    const dispatch = useDispatch();

    // const showOrderDishes = (arr) => {
    //     if (arr.length === 0) {
    //         return <h5>Not dishes yet</h5>
    //     } else if (arr.length > 0) {

    //         return arr.map(({ id, name, price, img }) => {
    //             return (
    //                 <div key={id}>
    //                     <div>
    //                         <img src={img} alt="" />
    //                     </div>
    //                     <div>
    //                         <p>{name}</p>
    //                         <p>{price}</p>
    //                     </div>
    //                 </div>
    //             )
    //         })

    //     }
    // }


    const swapForm = () => {
        document.querySelector(`.mainBgForm`).className = 'mainBgFooter'
        document.querySelector(`.footer`).className = `footer footerActive`
        document.querySelector(`.buyForm`).className = `buyForm footerNoActive`
    }

    return (
        <div className='buyForm footerNoActive'>
            <div>
                <button onClick={() => swapForm()}><img src={line} alt="" /></button>
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
                    phone: Yup.string()
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
                            {/* {showOrderDishes(orderDishes)} */}
                        </div>

                        <div className='formik__button'>
                            <button type='submit'>Order</button>
                        </div>

                    </Form>)}
            </Formik>
        </div>
    )
}

export default BuyForm;