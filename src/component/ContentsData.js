import Info from './contents/about/About';
import Connect from './contents/connect/Connect';
import Skill from './contents/skill/Skill';
import Project from './contents/project/Project';
// import infoSvg from '../../public/info.svg'
// import phoneSvg from '../../public/phone.svg'

const ContentsData = [
  {
    id : 0,
    title : 'About Me',
    value : '/info',
    components : Info,
    useCardInner : false,
    useIcon : false,
    img : './info.svg',
    href : 'info'
  },
  {
    id : 1,
    title : 'Skill',
    value : '/skill',
    components : Skill,
    useCardInner : true,
    useIcon : true,
    img : '',
    href : 'skill'
  },
  {
    id : 2,
    title : 'Project',
    value : '/project',
    components : Project,
    useCardInner : true,
    useIcon : true,
    img : '',
    href : 'project'
  },
  {
    id : 3,
    title : 'Connect',
    value : '/connect',
    components : Connect,
    useCardInner : false,
    useIcon : false,
    img : './phone.svg',
    href : 'connect'
  }
];

export default ContentsData