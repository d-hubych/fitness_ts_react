import { FC } from 'react';

type Props = {
  text: string;
}

const HText: FC<Props> = ({ text }) => {
  return (
    <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
      {text}
    </h1>
  )
}

export default HText
