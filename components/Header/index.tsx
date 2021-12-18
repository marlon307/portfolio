import React, { useState } from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import { ContentModal } from '../Modal';
import Contact from '../Contact';

const Header = function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [modaStatus, setModalStatus] = useState(false);

  function handleClickMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setMenuStatus(!menuStatus);
  }

  function openModal(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setModalStatus(true);
  }

  return (
    <header className={ style.header }>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/marlon307" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0703 20.5029C10.0703 20.3563 10.038 20.2114 9.97578 20.0786C9.91353 19.9458 9.82284 19.8283 9.71014 19.7345C9.59743 19.6407 9.46546 19.5728 9.32359 19.5356C9.18171 19.4984 9.03341 19.493 8.88917 19.5195C7.58009 19.7597 5.92726 19.7959 5.4878 18.5615C5.10461 17.6055 4.46987 16.771 3.65089 16.1465C3.59246 16.1147 3.53677 16.0781 3.48439 16.0371C3.41272 15.8481 3.2854 15.6852 3.11925 15.5699C2.95311 15.4547 2.75592 15.3925 2.55372 15.3916H2.54884C2.28444 15.3915 2.03077 15.4962 1.84335 15.6827C1.65594 15.8692 1.55004 16.1223 1.54884 16.3867C1.54493 17.2022 2.35984 17.7246 2.69044 17.9014C3.08029 18.2931 3.39359 18.7541 3.61427 19.2608C3.97853 20.2842 5.03712 21.8369 8.08009 21.6368C8.08109 21.6719 8.08204 21.7051 8.08253 21.7354L8.08692 22.003C8.08692 22.2682 8.19228 22.5225 8.37982 22.7101C8.56735 22.8976 8.82171 23.003 9.08692 23.003C9.35214 23.003 9.60649 22.8976 9.79403 22.7101C9.98157 22.5225 10.0869 22.2682 10.0869 22.003L10.082 21.6846C10.0772 21.4951 10.0703 21.2207 10.0703 20.5029ZM20.7373 5.37691C20.7691 5.25191 20.8003 5.11324 20.8277 4.95699C20.9894 3.84258 20.8484 2.70518 20.4195 1.66399C20.3653 1.52825 20.2822 1.40599 20.1758 1.30579C20.0694 1.20559 19.9425 1.12986 19.8037 1.08392C19.4477 0.963798 18.1333 0.727468 15.6197 2.33392C13.5302 1.84221 11.3551 1.84221 9.26565 2.33392C6.76222 0.750998 5.4546 0.965798 5.10206 1.07908C4.95993 1.12316 4.82946 1.19848 4.72021 1.29954C4.61097 1.40059 4.52572 1.5248 4.47071 1.66308C4.03301 2.72426 3.89355 3.88485 4.06739 5.01952C4.09181 5.14745 4.11817 5.26562 4.14552 5.37401C3.31709 6.47745 2.87583 7.82337 2.89015 9.20311C2.88745 9.51094 2.90163 9.8187 2.93263 10.125C3.26663 14.7275 6.26663 16.1094 8.35694 16.584C8.31349 16.709 8.27394 16.8428 8.23878 16.9844C8.17612 17.2417 8.21805 17.5133 8.35538 17.7397C8.49271 17.9662 8.71422 18.1289 8.97135 18.1922C9.22848 18.2556 9.50024 18.2144 9.72703 18.0776C9.95382 17.9409 10.1171 17.7198 10.1812 17.4629C10.2448 17.1297 10.4079 16.8236 10.6489 16.5849C10.7947 16.4573 10.9002 16.2901 10.9527 16.1036C11.0052 15.9172 11.0023 15.7194 10.9445 15.5346C10.8866 15.3497 10.7763 15.1856 10.6269 15.0622C10.4775 14.9389 10.2955 14.8616 10.103 14.8398C6.64894 14.4453 5.14942 13.0381 4.92384 9.9414C4.89885 9.69613 4.88761 9.44965 4.89015 9.20312C4.87411 8.21977 5.19898 7.2612 5.80958 6.49023C5.87093 6.40985 5.93628 6.3326 6.00538 6.25878C6.12781 6.12178 6.21013 5.9537 6.2433 5.77298C6.27646 5.59227 6.25919 5.40591 6.19338 5.23437C6.12592 5.0539 6.07397 4.868 6.03811 4.6787C5.95664 4.14041 5.98337 3.59129 6.11671 3.06346C6.98585 3.30893 7.80383 3.7085 8.53171 4.24314C8.65208 4.32331 8.78828 4.37667 8.93108 4.39958C9.07388 4.4225 9.21994 4.41444 9.35935 4.37596C11.3805 3.82746 13.5113 3.8278 15.5322 4.37696C15.6724 4.4154 15.8192 4.423 15.9626 4.39923C16.106 4.37545 16.2425 4.32088 16.3628 4.23927C17.0872 3.70241 17.9018 3.29926 18.768 3.04884C18.9008 3.56399 18.9305 4.10029 18.8554 4.62696C18.8192 4.83449 18.7626 5.03796 18.6865 5.23439C18.6207 5.40593 18.6034 5.59229 18.6366 5.773C18.6697 5.95372 18.7521 6.1218 18.8745 6.2588C18.9516 6.34571 19.0288 6.43946 19.0981 6.52735C19.7044 7.28527 20.0238 8.23282 20 9.20311C20.0018 9.46272 19.9893 9.72223 19.9624 9.98045C19.7422 13.0361 18.2368 14.4443 14.7666 14.8398C14.5741 14.8617 14.392 14.9391 14.2427 15.0626C14.0933 15.1861 13.983 15.3503 13.9253 15.5352C13.8675 15.7202 13.8647 15.918 13.9172 16.1045C13.9698 16.2911 14.0754 16.4583 14.2212 16.5859C14.4698 16.8309 14.6333 17.1493 14.6875 17.4941C14.7551 17.7618 14.7861 18.0374 14.7798 18.3135V20.6475C14.77 21.2949 14.77 21.7802 14.77 22.0029C14.77 22.2681 14.8754 22.5225 15.0629 22.71C15.2504 22.8976 15.5048 23.0029 15.77 23.0029C16.0352 23.0029 16.2896 22.8976 16.4771 22.71C16.6647 22.5225 16.77 22.2681 16.77 22.0029C16.77 21.7861 16.77 21.3105 16.7798 20.6631V18.3135C16.7878 17.8713 16.7358 17.4301 16.625 17.0019C16.5933 16.8614 16.5545 16.7225 16.5088 16.5859C18.03 16.3332 19.4123 15.5489 20.4094 14.3725C21.4065 13.1962 21.9539 11.7042 21.9541 10.1621C21.987 9.84352 22.0024 9.52337 22 9.20311C22.0222 7.82188 21.5773 6.47363 20.7373 5.37693L20.7373 5.37691Z" fill="white" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marlon307/" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 8.999C16.6047 8.99862 15.7233 9.22006 14.9345 9.64353C14.8626 9.45396 14.7346 9.29077 14.5677 9.17564C14.4008 9.06052 14.2027 8.99891 14 8.999H9.99997C9.86863 8.99893 9.73856 9.02474 9.6172 9.07497C9.49584 9.1252 9.38557 9.19885 9.2927 9.29173C9.19982 9.3846 9.12617 9.49487 9.07594 9.61623C9.02571 9.73759 8.9999 9.86766 8.99997 9.999V21.999C8.99989 22.1303 9.02571 22.2604 9.07594 22.3818C9.12616 22.5031 9.19982 22.6134 9.29269 22.7063C9.38557 22.7992 9.49584 22.8728 9.6172 22.923C9.73856 22.9733 9.86863 22.9991 9.99997 22.999H14C14.1313 22.9991 14.2614 22.9733 14.3827 22.923C14.5041 22.8728 14.6144 22.7992 14.7072 22.7063C14.8001 22.6134 14.8738 22.5031 14.924 22.3818C14.9742 22.2604 15 22.1303 15 21.999V16.499C15 16.2338 15.1053 15.9794 15.2929 15.7919C15.4804 15.6044 15.7348 15.499 16 15.499C16.2652 15.499 16.5195 15.6044 16.7071 15.7919C16.8946 15.9794 17 16.2338 17 16.499V21.999C16.9999 22.1303 17.0257 22.2604 17.0759 22.3818C17.1262 22.5031 17.1998 22.6134 17.2927 22.7063C17.3856 22.7992 17.4958 22.8728 17.6172 22.923C17.7386 22.9733 17.8686 22.9991 18 22.999H22C22.1313 22.9991 22.2614 22.9733 22.3827 22.923C22.5041 22.8728 22.6144 22.7992 22.7072 22.7063C22.8001 22.6134 22.8738 22.5031 22.924 22.3818C22.9742 22.2604 23 22.1303 23 21.999V14.499C22.9982 13.0409 22.4181 11.643 21.3871 10.6119C20.356 9.58086 18.9581 9.00081 17.5 8.999ZM21 20.999H19V16.499C19 15.7034 18.6839 14.9403 18.1213 14.3777C17.5587 13.8151 16.7956 13.499 16 13.499C15.2043 13.499 14.4413 13.8151 13.8786 14.3777C13.316 14.9403 13 15.7034 13 16.499V20.999H11V10.999H13V11.7021C13.0001 11.9093 13.0645 12.1114 13.1844 12.2804C13.3043 12.4494 13.4737 12.577 13.6692 12.6456C13.8647 12.7142 14.0767 12.7204 14.2759 12.6634C14.4751 12.6063 14.6517 12.4888 14.7812 12.3271C15.23 11.7572 15.8456 11.3416 16.542 11.1384C17.2384 10.9352 17.9808 10.9545 18.6657 11.1937C19.3506 11.4329 19.9436 11.88 20.3621 12.4726C20.7806 13.0651 21.0036 13.7736 21 14.499V20.999ZM6.99997 8.999H2.99997C2.86863 8.99893 2.73856 9.02474 2.6172 9.07497C2.49584 9.1252 2.38557 9.19885 2.2927 9.29173C2.19982 9.3846 2.12617 9.49487 2.07594 9.61623C2.02571 9.73759 1.9999 9.86766 1.99997 9.999V21.999C1.99989 22.1303 2.02571 22.2604 2.07594 22.3818C2.12616 22.5031 2.19982 22.6134 2.29269 22.7063C2.38557 22.7992 2.49584 22.8728 2.6172 22.923C2.73856 22.9733 2.86863 22.9991 2.99997 22.999H6.99997C7.13131 22.9991 7.26138 22.9733 7.38274 22.923C7.5041 22.8728 7.61437 22.7992 7.70725 22.7063C7.80012 22.6134 7.87378 22.5031 7.92401 22.3818C7.97423 22.2604 8.00005 22.1303 7.99997 21.999V9.999C8.00005 9.86766 7.97423 9.73759 7.924 9.61623C7.87378 9.49487 7.80012 9.3846 7.70724 9.29173C7.61437 9.19885 7.5041 9.1252 7.38274 9.07497C7.26138 9.02474 7.13131 8.99893 6.99997 8.999ZM5.99997 20.999H3.99997V10.999H5.99997V20.999ZM5.01462 1.542C4.57698 1.5158 4.13859 1.5789 3.7261 1.72745C3.31361 1.87599 2.93564 2.10689 2.61519 2.40609C2.29473 2.7053 2.03849 3.06656 1.86203 3.4679C1.68557 3.86924 1.59259 4.30229 1.58875 4.74069C1.5849 5.1791 1.67027 5.61371 1.83966 6.01808C2.00904 6.42246 2.25891 6.78816 2.57407 7.09294C2.88922 7.39772 3.26308 7.63522 3.6729 7.79098C4.08272 7.94674 4.51994 8.01752 4.95797 7.999H4.98629C5.42509 8.02506 5.86459 7.96138 6.27795 7.81185C6.6913 7.66232 7.06983 7.43007 7.39039 7.12931C7.71096 6.82854 7.96683 6.46557 8.14238 6.06258C8.31793 5.65958 8.40946 5.22503 8.41139 4.78546C8.41332 4.34589 8.3256 3.91055 8.15359 3.50603C7.98159 3.10151 7.7289 2.73631 7.41099 2.43275C7.09307 2.12918 6.7166 1.89363 6.30457 1.74047C5.89255 1.58732 5.45362 1.51979 5.01461 1.542H5.01462ZM4.9863 5.999H4.95797C4.78504 6.02 4.60961 6.00378 4.44346 5.95143C4.27731 5.89908 4.12427 5.81181 3.99461 5.69547C3.86495 5.57912 3.76167 5.4364 3.69168 5.27688C3.6217 5.11735 3.58664 4.9447 3.58884 4.77051C3.58884 4.02441 4.14841 3.54199 5.01462 3.54199C5.18932 3.5187 5.36698 3.53312 5.53564 3.58428C5.70429 3.63543 5.86003 3.72213 5.99236 3.83854C6.12468 3.95495 6.23053 4.09837 6.30276 4.25913C6.37499 4.41989 6.41193 4.59427 6.4111 4.77051C6.4111 5.5166 5.85153 5.999 4.9863 5.999Z" fill="#fff" />

              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_marlon307" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9912 3.95021C22.9913 3.77357 22.9446 3.60007 22.8558 3.44735C22.7671 3.29464 22.6394 3.16817 22.4859 3.08084C22.3324 2.9935 22.1584 2.94842 21.9818 2.95017C21.8052 2.95193 21.6322 3.00046 21.4804 3.09083C20.8951 3.43921 20.265 3.70601 19.6074 3.88383C18.6684 3.07806 17.4708 2.63713 16.2334 2.64164C14.876 2.6432 13.5723 3.17223 12.5976 4.11702C11.623 5.06181 11.0536 6.3484 11.0098 7.70512C8.33378 7.27838 5.90843 5.88164 4.19625 3.78126C4.09308 3.65609 3.96133 3.55757 3.81211 3.494C3.66288 3.43043 3.50056 3.40368 3.33883 3.41601C3.17719 3.42932 3.02122 3.4818 2.88442 3.56892C2.74762 3.65603 2.63409 3.77516 2.55367 3.91601C2.1412 4.63582 1.9043 5.44276 1.86222 6.27131C1.82014 7.09986 1.97406 7.92666 2.31148 8.68456L2.30953 8.68651C2.15788 8.77991 2.03272 8.91066 1.94603 9.06625C1.85935 9.22185 1.81403 9.39708 1.81441 9.57519C1.81257 9.72211 1.82139 9.86898 1.84078 10.0146C1.94292 11.2729 2.50056 12.4507 3.40914 13.3271C3.3475 13.4446 3.30988 13.5731 3.29848 13.7052C3.28708 13.8373 3.30212 13.9704 3.34273 14.0967C3.73884 15.3308 4.58123 16.3727 5.70504 17.0185C4.56328 17.46 3.33046 17.614 2.11519 17.4668C1.89026 17.4386 1.66242 17.4876 1.46904 17.6059C1.27566 17.7242 1.12822 17.9047 1.0509 18.1178C0.973592 18.3309 0.970999 18.5639 1.04355 18.7787C1.1161 18.9935 1.25949 19.1772 1.45019 19.2998C3.54028 20.646 5.97387 21.3617 8.45996 21.3613C11.2792 21.393 14.0299 20.4921 16.2842 18.7988C18.5385 17.1054 20.1699 14.7145 20.9248 11.998C21.2778 10.8146 21.4581 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3855 6.92668 22.6486 6.20527C22.9117 5.48387 23.0282 4.7172 22.9912 3.95021ZM19.6845 7.16212C19.5194 7.35746 19.4358 7.60891 19.4511 7.86427C19.4609 8.02927 19.4599 8.19527 19.4599 8.35157C19.4579 9.39511 19.3049 10.4329 19.0058 11.4326C18.3893 13.744 17.015 15.7817 15.1029 17.2192C13.1908 18.6568 10.8516 19.4111 8.45996 19.3613C7.60084 19.3616 6.74468 19.2606 5.90918 19.0606C6.97459 18.7172 7.97077 18.1879 8.85156 17.4971C9.01378 17.3693 9.13251 17.1945 9.19145 16.9967C9.25038 16.7988 9.24664 16.5875 9.18073 16.3918C9.11483 16.1961 8.98999 16.0257 8.82334 15.9038C8.65669 15.7819 8.4564 15.7145 8.24996 15.7109C7.41879 15.698 6.62509 15.363 6.03609 14.7764C6.18551 14.7481 6.33395 14.7129 6.48141 14.6709C6.69742 14.6094 6.88645 14.477 7.01807 14.295C7.14969 14.1131 7.21623 13.8921 7.20698 13.6677C7.19773 13.4433 7.11324 13.2285 6.96709 13.058C6.82095 12.8874 6.62167 12.7711 6.40133 12.7275C5.91887 12.6323 5.46487 12.427 5.07464 12.1277C4.68441 11.8284 4.36845 11.4432 4.15133 11.002C4.33206 11.0266 4.51394 11.0419 4.69625 11.0479C4.91283 11.0511 5.12484 10.9854 5.30162 10.8603C5.47841 10.7351 5.6108 10.5569 5.67965 10.3516C5.74563 10.1443 5.74223 9.92123 5.66998 9.7161C5.59772 9.51096 5.46055 9.33499 5.27926 9.21485C4.83941 8.92182 4.4791 8.52427 4.23061 8.0578C3.98213 7.59134 3.85322 7.07052 3.85543 6.54201C3.85543 6.47561 3.85738 6.4092 3.86129 6.34377C6.10255 8.43402 9.00961 9.66621 12.0703 9.82326C12.2248 9.82934 12.3786 9.80024 12.5202 9.73816C12.6618 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0928 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0365 8.35806 13.0073 8.11357 13.0068 7.86818C13.0077 7.01271 13.3479 6.19254 13.9528 5.58764C14.5577 4.98274 15.3779 4.64251 16.2334 4.64161C16.6735 4.64043 17.1091 4.7305 17.5127 4.90615C17.9162 5.0818 18.279 5.3392 18.5781 5.66212C18.6934 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3328 5.99303 19.499 5.96001C19.9097 5.88006 20.3146 5.7724 20.7109 5.63775C20.4406 6.19072 20.0952 6.70369 19.6845 7.16212Z" fill="#fff" />
              </svg>
            </a>
          </li>
        </ul>
        <div className={ style.menu }>
          <a
            href="#"
            onClick={ handleClickMenu }
          >
            <span
              className={ cx(style.icomn, {
                [style.active]: menuStatus,
              }) }
            />
          </a>
          <div className={ cx(style.dropmn, {
            [style.active]: menuStatus,
          }) }
          >
            <ul>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H9C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8H8ZM13 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H11V7C11 7.79565 11.3161 8.55871 11.8787 9.12132C12.4413 9.68393 13.2044 10 14 10H17V12C17 12.2652 17.1054 12.5196 17.2929 12.7071C17.4804 12.8946 17.7348 13 18 13C18.2652 13 18.5196 12.8946 18.7071 12.7071C18.8946 12.5196 19 12.2652 19 12V9C19 9 19 9 19 8.94C18.9896 8.84813 18.9695 8.75763 18.94 8.67V8.58C18.8919 8.47718 18.8278 8.38267 18.75 8.3L12.75 2.3C12.6673 2.22222 12.5728 2.15808 12.47 2.11C12.4369 2.10421 12.4031 2.10421 12.37 2.11C12.2728 2.058 12.1683 2.02092 12.06 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H13C13.2652 22 13.5196 21.8946 13.7071 21.7071C13.8946 21.5196 14 21.2652 14 21C14 20.7348 13.8946 20.4804 13.7071 20.2929C13.5196 20.1054 13.2652 20 13 20ZM13 5.41L15.59 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7V5.41ZM14 12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12ZM20.71 18.29C20.617 18.1963 20.5064 18.1219 20.3846 18.0711C20.2627 18.0203 20.132 17.9942 20 17.9942C19.868 17.9942 19.7373 18.0203 19.6154 18.0711C19.4936 18.1219 19.383 18.1963 19.29 18.29L19 18.59V16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15C17.7348 15 17.4804 15.1054 17.2929 15.2929C17.1054 15.4804 17 15.7348 17 16V18.59L16.71 18.29C16.5217 18.1017 16.2663 17.9959 16 17.9959C15.7337 17.9959 15.4783 18.1017 15.29 18.29C15.1017 18.4783 14.9959 18.7337 14.9959 19C14.9959 19.2663 15.1017 19.5217 15.29 19.71L17.29 21.71C17.3851 21.801 17.4972 21.8724 17.62 21.92C17.7397 21.9729 17.8691 22.0002 18 22.0002C18.1309 22.0002 18.2603 21.9729 18.38 21.92C18.5028 21.8724 18.6149 21.801 18.71 21.71L20.71 19.71C20.8037 19.617 20.8781 19.5064 20.9289 19.3846C20.9797 19.2627 21.0058 19.132 21.0058 19C21.0058 18.868 20.9797 18.7373 20.9289 18.6154C20.8781 18.4936 20.8037 18.383 20.71 18.29ZM12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16H8C7.73478 16 7.48043 16.1054 7.29289 16.2929C7.10536 16.4804 7 16.7348 7 17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18H12Z" fill="white" />
                </svg>
                <a href="https://github.com/marlon307/portfolio/raw/master/Download/Marlon.pdf" download rel="noreferrer">Download CV</a>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z" fill="#fff" />
                </svg>
                <a href="#" onClick={ openModal }>Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ContentModal active={ modaStatus } functionTogle={ setModalStatus }>
        <Contact />
      </ContentModal>
    </header>
  );
};

export default Header;
