import Image from 'next/image'
import data from '../data.json'


export default function Home() {
  return (
    <div className="flex items-center">
      <Image
        alt={data.name}
        src={data.avatar}
        width={48}
        height={48}
      />
    </div>
  );
}
