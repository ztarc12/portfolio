import Info from './contents/info/Info';

const ContentsData = [
  {
    id : 0,
    title : '소개',
    value : '/info',
    components : Info,
    useCardInner : false
  },
  {
    id : 1,
    title : '스킬',
    value : '/skill',
    components : Info,
    useCardInner : true
  },
  {
    id : 2,
    title : '프로젝트',
    value : '/project',
    components : Info,
    useCardInner : true
  },
  {
    id : 3,
    title : '연락',
    value : '/connect',
    components : Info,
    useCardInner : false
  }
];

export default ContentsData