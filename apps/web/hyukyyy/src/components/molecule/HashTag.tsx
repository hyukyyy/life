interface Props {
  text: string;
}

export default function HashTag({ text }: Props) {
  return <span className='mx-[1px] text-[#3ea6ff]'>#{text}</span>;
}
