import { AiOutlineFieldTime } from 'react-icons/ai';
import { PiProjectorScreenThin } from 'react-icons/pi';
import { MdOutlineLanguage } from 'react-icons/md';
import dayjs from 'dayjs';

const start = dayjs('2022/11/28');
const end = dayjs();

const monthDiff = end.diff(start, 'month');
const yearDiff = end.diff(start, 'year');

const timeInWork = `${
  monthDiff >= 12
    ? yearDiff > 1
      ? `In the last ${yearDiff} years`
      : `In the last year`
    : `In the last ${monthDiff} months`
}`;

export const aboutCardData = [
  {
    id: 1,
    icon: <AiOutlineFieldTime className='about__icon' />,
    title: 'Academic',
    small: '1300h in IS and IT',
  },
  {
    id: 2,
    icon: <MdOutlineLanguage className='about__icon' />,
    title: 'English',
    small: 'Level B2',
  },
  {
    id: 3,
    icon: <PiProjectorScreenThin className='about__icon' />,
    title: 'Projects',
    small: '11+ projects',
  },
];

export const aboutTextData = [
  {
    id: 1,
    text: `I graduated from two of the main federal universities in Minas Gerais, where I had the opportunity to get involved in various development projects, covering Front-end, Back-end, and Mobile areas, using various technologies.`,
  },
  {
    id: 2,
    text: `${timeInWork}, I have been working in a non-profit development group, focused on preparing members for the job market. In this project, called LetsWorkFree, we dedicate 6 hours a day, flexibly, to improve our skills and professional practices. We use agile methodologies, such as SCRUM, and occasionally employ Kanban to optimize task organization.`,
  },
  {
    id: 3,
    text: `In addition, I work on three individual projects, with active users, which I developed independently. They are: ThinSecret, a nutrient and body state management application; Agendapp, a customer scheduling management application; and HabitPlus, an application for controlling daily habits and goals.`,
  },
];
