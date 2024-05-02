import Image from 'next/image';

interface Icon {
  icon: string;
  alt: string;
}

interface SocialIconsProps {
  dataSocial: Icon[];
}

const SocialIcons = ({ dataSocial }: SocialIconsProps) => {
  return (
    <>
      {dataSocial?.map(({ icon, alt }) => (
        <Image key={alt} src={icon} alt={alt} width={40} height={40} priority />
      ))}
    </>
  );
};

export default SocialIcons;
