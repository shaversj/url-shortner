export default function FooterContent({ children }: React.PropsWithChildren<{}>) {
  return <div className={'flex flex-col items-center lg:flex-row lg:items-start'}>{children}</div>;
}
