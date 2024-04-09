import React from 'react';
import './../scss/pages/SignIn.scss'
import { ModalBlock} from "../components/modalBlock";


export const SignIn: React.FC = ():React.ReactElement => {

    const [visibleModal, setVisibleModal] = React.useState <'signIn' | 'signOut' | 'signUp'> ()

   const handleClickOpenSignIn = ():void => {
       setVisibleModal('signIn')
   }
    const handleClickOpenSignUp = ():void => {
        setVisibleModal('signUp')
    }
    const handleCloseModal = ():void => {
        setVisibleModal(undefined)
    }

    return (
        <div className='wrapper'>
            <section className='yellowBlock'>
                <ul>
                    <li><p>- Все интересные новости в одной ленте</p></li>
                    <li><p>- Делись с другими своими мыслями</p></li>
                    <li><p>- Знакомься и общайся с людьми со всего мира</p></li>
                </ul>
            </section>
            <section className='loginBlock'>
                <div>
                    <p>Вместе с нами - пиши, делись, читай!</p>
                    <p>Будь в теме. Присоединяйся!</p>
                    <div className='loginBlock__btn'>
                        <button onClick={handleClickOpenSignUp}>Зарегистрироваться</button>
                        <button onClick={handleClickOpenSignIn}>Войти</button>
                    </div>
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal}  title='Войти в аккаунт'>

                        <form method='post'>
                            <input
                                className='modal-input'
                                type="email"
                                aria-label='email'
                                placeholder='Введите ваш email'
                            />
                            <input
                                className='modal-input'
                                type="password"
                                aria-label='password'
                                placeholder='Введите ваш пароль'
                            />
                        </form>

                        <div className='modal-content__btn'>
                            <button onClick={handleCloseModal} className='modal-btn'>
                                Войти
                            </button>
                        </div>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        title='Создайте учетную запись'>
                        <form method='post'>
                            <input
                                className='modal-input'
                                type="text"
                                aria-label='имя'
                                placeholder='Имя'
                            />
                            <input
                                className='modal-input'
                                type="email"
                                aria-label='email'
                                placeholder='Email'
                            />
                            <input
                                className='modal-input'
                                type="password"
                                aria-label='password'
                                placeholder='Password'
                            />
                        </form>

                        <div className='modal-content__btn'>
                            <button onClick={handleCloseModal} className='modal-btn'>
                                Далее
                            </button>
                        </div>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};

