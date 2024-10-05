export default function MainSection({children}: React.PropsWithChildren<{}>) {
  return (
    <main className={"bg-white px-6 lg:h-[50rem] lg:px-[10.313rem] relative"}>
      {children}
    </main>
  )
}
