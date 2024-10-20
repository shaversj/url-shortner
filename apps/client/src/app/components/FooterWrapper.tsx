export default function FooterWrapper({ children }: React.PropsWithChildren<{}>) {
  return <footer className={'bg-darkBrown py-[4.5rem] lg:min-h-[20.625rem] lg:px-[10.313rem] lg:pb-0 lg:pt-[4.5rem]'}>{children}</footer>;
}
