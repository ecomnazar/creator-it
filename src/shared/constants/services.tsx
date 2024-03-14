import { MdOutlineDesignServices } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { CgSmartphoneChip } from "react-icons/cg";
import { RiApps2Line } from "react-icons/ri";
import { SiBlockchaindotcom } from "react-icons/si";
import { LuWallet } from "react-icons/lu";
import { RiNftLine } from "react-icons/ri";
import { PiGameControllerBold } from "react-icons/pi";
import { BsRobot } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";
import { GiCyberEye } from "react-icons/gi";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { CgDesktop } from "react-icons/cg";
import { LuNetwork } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { LuWallpaper } from "react-icons/lu";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { LuBot } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { TbSettingsAutomation } from "react-icons/tb";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { RiRemoteControlLine } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { PiVirtualReality } from "react-icons/pi";
import { PiFolderPlusBold } from "react-icons/pi";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";

export const topServices = [
  "Web-разработка",
  "CMS",
  "Дизайн",
  "Telegram",
  "Чат-боты",
  "NFT",
  "AR/VR",
  "Кибербезопасность",
];

export const services = [
  {
    icon: <MdOutlineDesignServices />,
    title: "Веб-разработка и дизайн:",
    child: [
      "Разработка и поддержка веб-сайтов",
      "Дизайн пользовательских интерфейсов (UI) и пользовательских опытов (UX)",
      "Создание логотипов и брендинга",
      "Создание и поддержка веб-сайтов",
      "Разработка интерактивных веб-приложений",
    ],
  },
  {
    icon: <FaTelegramPlane />,
    title: "Создание ТЕЛЕГРАМ БОТА:",
    child: [
      "Разработка идеи и функционала бота",
      "Интеграция с базами данных",
      "Реализация пользовательских команд",
      "Интерфейс с интуитивно понятным дизайном",
      "Обеспечение безопасности и конфиденциальности данных",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Мобильная разработка:",
    child: ["Разработка мобильных приложений для iOS и Android"],
  },
  {
    icon: <FaBitcoin />,
    title: "Создание Криптовалютных Бирж:",
    child: [
      "Разработка платформ для обмена криптовалют, включая функционал торговли, депозиты и снятие средств",
    ],
  },
  {
    icon: <CgSmartphoneChip />,
    title: "Разработка Смарт-Контрактов:",
    child: [
      "Создание умных контрактов для различных блокчейн-платформ, таких как Ethereum, Binance Smart Chain, Solana и другие",
    ],
  },
  {
    icon: <RiApps2Line />,
    title: "Разработка программного обеспечения:",
    child: [
      "Написание программ и скриптов для автоматизации задач",
      "Разработка настольных приложений",
    ],
  },
  {
    icon: <SiBlockchaindotcom />,
    title: "Блокчейн-разработка:",
    child: [
      "Создание смарт-контрактов",
      "Разработка децентрализованных приложений (DApps)",
    ],
  },
  {
    icon: <LuWallet />,
    title: "Разработка Кошельков:",
    child: [
      "Создание безопасных и удобных криптовалютных кошельков для хранения и управления активами",
    ],
  },
  {
    icon: <RiNftLine />,
    title: "Разработка NFT-проектов:",
    child: [
      "Создание проектов, связанных с невзаимозаменяемыми токенами (NFT), таких как маркетплейсы, игры и искусство",
    ],
  },
  {
    icon: <PiGameControllerBold />,
    title: "Игровая разработка:",
    child: [
      "Создание игр и игровых приложений",
      "Разработка графики и анимаций для игр",
    ],
  },
  {
    icon: <BsRobot />,
    title: "Машинное обучение и искусственный интеллект:",
    child: [
      "Разработка моделей машинного обучения",
      "Обработка данных и создание алгоритмов",
    ],
  },
  {
    icon: <GrSystem />,
    title: "Системная интеграция:",
    child: [
      "Интеграция различных систем и программных продуктов",
      "Разработка API",
    ],
  },
  {
    icon: <GiCyberEye />,
    title: "Кибербезопасность:",
    child: [
      "Проведение аудита безопасности",
      "Разработка средств защиты от взломов",
    ],
  },
  {
    icon: <MdOutlineSettingsApplications />,
    title: "Разработка встроенного программного обеспечения:",
    child: ["Программирование для микроконтроллеров и встраиваемых систем"],
  },
  {
    icon: <SiSpeedtest />,
    title: "Тестирование программного обеспечения:",
    child: ["Автоматизация тестирования", "Проведение тестовых сценариев"],
  },
  {
    icon: <CgDesktop />,
    title: "Программирование и разработка ПО:",
    child: [
      "Разработка мобильных приложений",
      "Написание скриптов и программ",
      "Разработка игр",
    ],
  },
  {
    icon: <LuNetwork />,
    title: "Разработка электронной коммерции:",
    child: ["Создание интернет-магазинов", "Интеграция платежных систем"],
  },
  {
    icon: <CgWebsite />,
    title: "Разработка сайтов на CMS:",
    child: [
      "Работа с популярными системами управления контентом, такими как WordPress, Joomla, Drupal",
    ],
  },
  {
    icon: <LuWallpaper />,
    title: "Разработка тем и плагинов:",
    child: [
      "Создание пользовательских тем и расширений для платформ и фреймворков",
    ],
  },
  {
    icon: <SiGooglecontaineroptimizedos />,
    title: "Оптимизация производительности:",
    child: ["Улучшение скорости и производительности веб-приложений"],
  },
  {
    icon: <LuBot />,
    title: "Разработка чат-ботов:",
    child: [
      "Создание ботов для платформ мессенджеров",
      "Интеграция с API мессенджеров",
    ],
  },
  {
    icon: <MdOutlineMiscellaneousServices />,
    title: "Разработка микросервисов:",
    child: ["Создание микросервисной архитектуры для веб-приложений"],
  },
  {
    icon: <BsBrowserChrome />,
    title: "Разработка расширений для браузеров:",
    child: ["Создание дополнений и расширений для популярных браузеров"],
  },
  {
    icon: <BiNetworkChart />,
    title: "Разработка сетевых приложений:",
    child: [
      "Создание приложений, использующих сетевые технологии, такие как TCP/IP, WebSocket и др",
    ],
  },
  {
    icon: <TbSettingsAutomation />,
    title: "Разработка инструментов автоматизации:",
    child: [
      "Написание скриптов и инструментов для автоматизации рутины и задач",
    ],
  },
  {
    icon: <LiaTemperatureHighSolid />,
    title: "Разработка под высокую нагрузку:",
    child: [
      "Оптимизация веб-приложений для работы с большими объемами данных и трафика",
    ],
  },
  {
    icon: <MdOutlineDeveloperBoard />,
    title: "Геопространственная разработка:",
    child: [
      "Создание географических информационных систем (ГИС) и картографических приложений",
    ],
  },
  {
    icon: <LiaMoneyCheckAltSolid />,
    title: "Разработка финансовых платформ:",
    child: [
      "Создание финансовых приложений, банковских систем или платформ для онлайн-платежей",
    ],
  },
  {
    icon: <RiRemoteControlLine />,
    title: "Разработка систем управления производственными процессами:",
    child: [
      "Создание программ для автоматизации и оптимизации производственных процессов",
    ],
  },
  {
    icon: <MdCastForEducation />,
    title: "Разработка приложений для образования:",
    child: [
      "Создание онлайн-учебных платформ, электронных учебников и приложений для образования",
    ],
  },
  {
    icon: <PiVirtualReality />,
    title:
      "Разработка программ для виртуальной реальности (VR) и дополненной реальности (AR):",
    child: ["Создание виртуальных и дополненных сценариев, приложений и игр"],
  },
  {
    icon: <PiFolderPlusBold />,
    title: "Разработка систем управления ресурсами предприятия (ERP):",
    child: [
      "Создание программных решений для управления бизнес-процессами предприятий",
    ],
  },
  {
    icon: <BsSmartwatch />,
    title: "Разработка приложений для умных устройств:",
    child: [
      "Создание программ для взаимодействия с умными устройствами и домашней автоматизации",
    ],
  },
  {
    icon: <MdOutlinePermMedia />,
    title: "Разработка систем для анализа данных социальных медиа:",
    child: [
      "Создание инструментов для сбора и анализа данных из социальных сетей",
    ],
  },
];
