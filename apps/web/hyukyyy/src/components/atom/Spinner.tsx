import styled from 'styled-components';
import tw from 'twin.macro';

const Root = styled.span`
  ${tw`inline-block`}
  ${tw`rounded-full box-border`}
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  animation: spinner-rotation 1s linear infinite;

  @keyframes spinner-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner(props: { className?: string }) {
  const parseClassname = () => {
    let className = props.className;
    if (props.className) {
      if (!props.className.includes(`w-`)) {
        className += 'w-12';
      }
      if (!props.className.includes(`h-`)) {
        className += 'h-12';
      }
    } else {
      className += 'w-12 h-12';
    }
    return className;
  };

  return <Root className={parseClassname()} />;
}

export default Spinner;
