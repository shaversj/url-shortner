export default function FooterContent({children}: React.PropsWithChildren<{}>) {
  return (
    <div className={"flex flex-col items-center lg:items-start lg:flex-row"}>
      {children}
    </div>
  )
}
