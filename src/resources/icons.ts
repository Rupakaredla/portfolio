import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiShieldCheckDuotone,
  PiTerminalWindowDuotone,
  PiBrainDuotone,
  PiChartLineUpDuotone,
  PiDatabaseDuotone,
  PiCertificateDuotone,
  PiTrophyDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiMysql,
  SiPowers,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  // General
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  shield: PiShieldCheckDuotone,
  terminal: PiTerminalWindowDuotone,
  brain: PiBrainDuotone,
  chart: PiChartLineUpDuotone,
  database: PiDatabaseDuotone,
  certificate: PiCertificateDuotone,
  trophy: PiTrophyDuotone,

  // Social
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,

  // Frontend / Web
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  nextjs: SiNextdotjs,

  // Backend / Database
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  supabase: SiSupabase,
  postman: SiPostman,

  // Programming / AI
  python: SiPython,

  // DevOps / Infrastructure
  docker: SiDocker,
  kubernetes: SiKubernetes,

  // Data / Analytics
  powerbi: SiPowers,

  // Design
  figma: SiFigma,
};

export type IconLibrary = typeof iconLibrary;

export type IconName = keyof IconLibrary;