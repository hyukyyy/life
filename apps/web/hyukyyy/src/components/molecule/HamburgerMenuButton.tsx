import BgRoundIconButton from './BgRoundIconButton';

interface Props {
  onClick: () => void;
}

export default function HamburgerMenuButton({onClick}: Props): JSX.Element {
  return (
    <BgRoundIconButton>
      <div
        className='flex h-5 w-8 cursor-pointer flex-col justify-between'
        onClick={onClick}
      >
        <div className='h-1 rounded bg-white'></div>
        <div className='h-1 rounded bg-white'></div>
        <div className='h-1 rounded bg-white'></div>
      </div>
    </BgRoundIconButton>
  );
}
