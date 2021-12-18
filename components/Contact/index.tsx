import React, { useRef, useCallback, useState } from 'react';
import emailjs from 'emailjs-com';
import Input from './Input';
import style from './style.module.scss';

type RefProps = {
  current: any
}

type TChangeInp = {
  target: {
    name: string;
    value: string;
  }
}

const Index = function Index() {
  const [sucess, setSucess] = useState(0);
  const [forminfo, setFormInfo] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const onChangeInputs = useCallback(({ target }: TChangeInp): void => {
    const { name, value } = target;

    setFormInfo({
      ...forminfo,
      [name]: value,
    });
  }, [forminfo]);

  const form: RefProps = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const service = process.env.SERVICE_ID!;
    const template = process.env.TEMPLATE_ID!;
    const integration = process.env.USER_ID!;

    emailjs.sendForm(service, template, form.current, integration)
      .then(() => {
        setFormInfo({
          user_name: '',
          user_email: '',
          message: '',
        });
        setSucess(1);
      }, () => {
        setSucess(2);
      });
  };

  return (
    <section id="contact" className={ style.contact } onSubmit={ sendEmail }>
      <h1>Contato</h1>
      <form ref={ form } className={ style.mailmessage }>
        <div className={ style.primaryline }>
          <Input
            eventchange={ onChangeInputs }
            value={ forminfo.user_name }
            id="Nome"
            name="user_name"
            type="text"
            required
          />
          <Input
            eventchange={ onChangeInputs }
            value={ forminfo.user_email }
            id="Email"
            name="user_email"
            type="email"
            required
          />
        </div>
        <textarea
          className={ style.textarea }
          name="message"
          id="message"
          placeholder="Deixe aqui sua menssagem. *"
          cols={ 30 }
          rows={ 7 }
          maxLength={ 500 }
          value={ forminfo.message }
          onChange={ onChangeInputs }
          required
        />
        <div className={ style.button }>
          { sucess === 0 && <button type="submit" value="Send">ENVIAR MENSAGEM</button> }
          { sucess === 1 && <span>Mensagem enviada com sucesso!</span> }
          { sucess === 2
            && (
              <>
                <p>Erro ao tentar enviar mensagem. Tente novamente mais tarde! ; ).</p>
                <button type="submit" value="Send">ENVIAR MENSAGEM</button>
              </>
            ) }
        </div>
      </form>
    </section>
  );
};

export default Index;
