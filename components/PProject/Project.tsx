import React from 'react';
import Card from './Card';
import style from './style.module.scss';
import pictureGitHub from '../../assets/picture-github.png';
import pitcRespponse from '../../assets/picture-respponse.png';
import pitcCoinsure from '../../assets/coinsure-picture.png';
import pitcAppAgenda from '../../assets/Screenshot from 2023-04-25 12-50-29.png';
import picMundoDoPoliglota from '../../assets/Mundo do Poliglota.png';

const Project = function Project() {
  return (
    <section className={ style.projects }>
      <div className={ style.titlesection }>
        <h1>Projetos.</h1>
        <span>Projetos próprios e os quais eu já participei.</span>
      </div>
      <div className={ style.mural }>
        <Card
          link="https://mundodopoliglota.com/"
          url={ picMundoDoPoliglota }
          number="1"
          name="MUNDO DO POLIGLOTA"
          desc="Desenvolvi um plugin para ser possível traduzir todo o site para o idioma escolhido e fiz toda a alteração do tema para um mais moderno. Nesse projeto foi utilizado o WordPress"
        />
        <Card
          link="https://www.app-agenda.com/"
          url={ pitcAppAgenda }
          number="2"
          name="App agenda"
          desc="Agenda eficiente em que gera horários com base no tempo de serviço."
        />
        <Card
          link="https://project-respponse-marlon307.vercel.app/"
          url={ pitcRespponse }
          number="3"
          name="Respponse"
          desc="E-commerce desenvolvido com Next.Js e TypeScript. Com foco em venda de roupas e
          acessórios."
        />
        <Card
          link="https://coinsure.com.br/"
          url={ pitcCoinsure }
          number="4"
          name="Coinsure"
          desc="Seguros intuitivos de Responsabilidade Civil para todas as atividades profissionais com tecnologia e sem burocracia."
        />
        <Card
          link="https://github.com/marlon307/"
          url={ pictureGitHub }
          number="5"
          name="GitHub"
          desc="Meu gitHub ; )"
        />
      </div>
    </section>
  );
};

export default Project;
