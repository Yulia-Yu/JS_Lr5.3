import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const listDesert= [
  {des: "Пироженное Картошка",
  discr: `Классическое пирожное с ярким вкусом ароматного какао из 
  свежайшего бисквита и сгущенки. Повод насладиться моментом, пока у Вас 
  есть несколько мгновений с этим восхитительным традиционным пирожным.`},
  {des: "Меренговый рулет",
  discr: `Это восхитительно нежный десерт, который покорит вас 
  с первого кусочка. Основа этого десерта-меренга, но это не та хрустящая
   белоснежная сласть, к который мы привыкли. Меренга для рулета внутри 
   тягучая и пластичная, воздушное облако из крема чиз, прослоенное ягодным
    конфи, все это вместе не оставит вас равнодушным.`},
  {des: "Торт три шоколада",
  discr: `Нежное сочетание шоколадного бисквита и трёх видов бельгийского 
  шоколада в муссе создают изысканную вкусовую гармонию. Торт три шоколада
   — кондитерский шедевр, который станет украшением вашего праздника или 
   отличным поводом собраться с друзьями за чашечкой чая.`},
  {des: "Профитроли",
  discr: `Знаменитое французское кулинарное изделие под названием профитроли
   очень любят и ценят во всем мире. Это такие миниатюрные булочки, размер 
   которых составляет не более четырех сантиметров. Для их изготовления 
   используют заварное тесто.`},
  {des: "Пирог Баноффи",
  discr: `Возможно, это один из самых потрясающих десертов Англии. Его 
  готовят из бананов, сливок и ириски, сваренной из сгущённого молока. 
  Всё это выкладывается на корж из покрошенного печенья и сливочного масла.`}
]

const listImg = ["b39.jpg"]
/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
      const logoImages =listImg.map((img, index) =>
            <img key={index} src={img} />
          );
      return(
        <div className="head">
          {logoImages}
        </div>
      )
    }


function Footer(props) {
  return(
    <div className="head">
        <p>© 2023 Десерты. Все права защищены.</p>
        </div>
  )
}
      
function Tagline() {
  return(
    <h1>
      Все что нужно для прекрасного дня!
    </h1>
  )
}

function Button(props) {
  let handleClickScroll = () => {

    let element = document.getElementById(props.a);
    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }
  };
  return (
    <input className="button" type="button" value={props.val} onClick={handleClickScroll}/>
  )
}

function Professions (props) {
  const listDesert = props.list.map((item, index) =>
    <DesItem key={index} des={item.des} discr={item.discr} />
  );
  return (
  <div className="des">
    <h2 className='des1'>{props.title} </h2>
    <ul>
      {listDesert}
    </ul>
  </div>
  )
}
function DesItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return(
    <li onClick={press}>
      <span className="left">{props.des}</span>
      <span className="right">
      {isOpen ? "×" : "+"}
      </span>
      {isOpen && <p> {props.discr}</p>}
    </li>
  )
}

function User() {
const [name, setName] = React.useState("");

 const onChange = (event) => {
 setName(event.target.value);
 };

 const handleSubmit = (event) => {
 event.preventDefault();
 alert("Здравствуйте, " + name + '! Заказ оформлен. Для его подтверждения зайдите на почту.');
 };

  return (
  <>
  <div id='props'>
  <form onSubmit={handleSubmit}>
    <h2>Оформление заказа :</h2>
      <p>Введите имя:
      <input type="text" value={name} onChange={onChange}/>
      </p>
      <p>Введите почту:
      <input type="text"/>
      </p>
      <p>Название десерта:
      <input type="text"/>
      </p>
      <p>Количество:
      <input type="number"/>
      </p>
     <button className="button" type="submit" >Отправить</button>
    </form></div>
  </>
  );
 }
 
function Content() {
  return(
  <>
  <Head listImg={listImg} />
  <Tagline/>
  <Button val={'Сделать заказ'} a="props"/>
  <Professions title="Принимаем заказы:" list={listDesert} />
  <User/>
  <Footer/>
  </>
  
  )
}
  
root.render(<Content />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
