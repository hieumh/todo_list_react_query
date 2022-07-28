type HeaderProps = {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <div className="bg-white h-[80px] py-5 pl-7 font-bold text-lg">
    {title}
  </div>
}