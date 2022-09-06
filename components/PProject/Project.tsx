import React from 'react';
import Card from './Card';
import style from './style.module.scss';
import pictureGitHub from '../../assets/picture-github.png';
import pitcRespponse from '../../assets/picture-respponse.png';
import pitcCoinsure from '../../assets/coinsure-picture.png';

const Project = function Project() {
  return (
    <section className={ style.projects }>
      <div className={ style.titlesection }>
        <h1>Projetos.</h1>
        <span>Projetos próprios e os quais eu já participei.</span>
      </div>
      <div className={ style.mural }>
        <Card
          link="https://project-respponse-marlon307.vercel.app/"
          url={ pitcRespponse }
          number="1"
          name="Respponse"
          desc="E-commerce desenvolvido com Next.Js e TypeScript. Com foco em venda de roupas e
          acessórios."
        />
        <Card
          link="https://github.com/marlon307/"
          url={ pictureGitHub }
          number="2"
          name="GitHub"
          desc="Meu gitHub ; )"
        />
        <Card
          link="https://coinsure.com.br/"
          url={ pitcCoinsure }
          number="3"
          name="Coinsure"
          desc="Seguros intuitivos de Responsabilidade Civil para todas as atividades profissionais com tecnologia e sem burocracia."
        />
      </div>
    </section>
  );
};

export default Project;
