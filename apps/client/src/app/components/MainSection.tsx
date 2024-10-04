export default function MainSection({children}: React.PropsWithChildren<{}>) {
  return (
    <main className={"bg-white h-[50rem] px-[10.313rem] relative"}>
      {children}
    </main>
  )
}
