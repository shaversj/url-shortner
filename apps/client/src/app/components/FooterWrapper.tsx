export default function FooterWrapper({children}: React.PropsWithChildren<{}>) {
  return (
    <footer className={"bg-darkBrown lg:px-[10.313rem] py-[4.5rem]"}>
      {children}
    </footer>
  )
}
