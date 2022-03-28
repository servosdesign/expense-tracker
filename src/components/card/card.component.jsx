import { CardDiv } from './card.styles';

const Card = props => {
  const classes = 'card ' + props.className;
  
  return <CardDiv className={classes}>{props.children}</CardDiv>
};

export default Card;