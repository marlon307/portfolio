import React, { type FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import Input from './Input';
import style from './style.module.scss';

const Index = function Index() {
  const [sucess, setSucess] = useState(0);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    const service = process.env.SERVICE_ID!;
    const template = process.env.TEMPLATE_ID!;
    const integration = process.env.USER_ID!;

    try {
      emailjs.sendForm(service, template, event.target as HTMLFormElement, integration)
        .then(() => {
          setSucess(1);
        }, () => {
          setSucess(2);
        });
    } catch (err) {
      setSucess(2);
    }
  };

  return (
    <section id="contact" className={ style.contact } onSubmit={ sendEmail }>
      <h1>Contato</h1>
      <form className={ style.mailmessage }>
        <div className={ style.primaryline }>
          <Input
            id="Nome"
            name="user_name"
            type="text"
            required
          />
          <Input
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
          required
        />
        <div className={ style.button }>
          { sucess === 0 && <button type="submit" value="Send">ENVIAR MENSAGEM</button> }
          { sucess === 1 && <span>Mensagem enviada com sucesso!</span> }
          { sucess === 2
            && (
              <>
                <p>Erro ao tentar enviar mensagem. Tente novamente mais tarde!</p>
                <button type="submit" value="Send">ENVIAR MENSAGEM</button>
              </>
            ) }
        </div>
      </form>
    </section>
  );
};

export default Index;
