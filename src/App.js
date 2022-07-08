import NotificationsPanel from './components/NotificationsPanel/NotificationsPanel';
import Title from './components/Title/Title';
import NotificationGroup from './components/NotificationGroup/NotificationGroup';
import NotificationIcon from './components/NotificationGroup/components/NotificationIcon/NotificationIcon';
import NotificationText from './components/NotificationGroup/components/NotificationText/NotificationText';

import './App.css';
import Divider from './components/Divider/Divider';

const plusIcon = (
  <svg
    width="7"
    height="7"
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" width="1" height="7" rx="0.5" fill="#50ACA7" />
    <rect
      x="7"
      y="3"
      width="1"
      height="7"
      rx="0.5"
      transform="rotate(90 7 3)"
      fill="#50ACA7"
    />
  </svg>
);

const polygonIcon = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3.55545"
      width="5.02817"
      height="5.02817"
      transform="rotate(45 3.55545 0)"
      fill="#E7D646"
    />
  </svg>
);

const subtractIcon = (
  <svg
    width="7"
    height="1"
    viewBox="0 0 7 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7"
      width="1"
      height="7"
      rx="0.5"
      transform="rotate(90 7 0)"
      fill="#CD503E"
    />
  </svg>
);

const notifications = [
  {
    icon: plusIcon,
    iconColor: '#E6F3F3',
    text: 'Você recebeu uma transferência no valor de R$399,99.',
  },
  {
    icon: polygonIcon,
    iconColor: '#F8F4D2',
    text: 'O app agora está de cara nova, adicionamos novas funcionalidades para melhorar a sua experiência!. Clique para saber mais! ;)',
  },
  {
    icon: subtractIcon,
    iconColor: '#FFDDD8',
    text: 'Você realizou uma transferência no valor de R$30,00.',
  },
  {
    icon: polygonIcon,
    iconColor: '#F8F4D2',
    text: '#DicaDoApp: Olá! Ainda não identificamos o pagamento da sua fatura do mês de julho. Para seguir para a aba de faturas do cartão de crédito, clique aqui e regularize o seu pagamento ;).',
  },
];

function App() {
  return (
    <>
      <NotificationsPanel>
        <Title text="Notificações" />
        {notifications.map((n, index) => (
          <>
            <NotificationGroup>
              <NotificationIcon backgroundColor={n.iconColor}>
                {n.icon}
              </NotificationIcon>
              <NotificationText text={n.text} />
            </NotificationGroup>
            {index !== notifications.length - 1 && <Divider />}
          </>
        ))}
      </NotificationsPanel>
    </>
  );
}

export default App;
