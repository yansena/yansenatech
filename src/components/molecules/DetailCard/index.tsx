import Link from 'next/link'

function DetailCard({
  description,
  href,
  title,
  children,
}: {
  href: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="relative flex aspect-square w-full max-w-[500px] flex-col items-center overflow-hidden rounded-lg bg-slate-600/20 pt-16 shadow-2xl"
    >
      <span className="mb-4 text-6xl font-semibold text-purple-100 sm:text-4xl md:text-4xl">
        {title}
      </span>
      <p className="mb-auto text-center text-4xl font-normal text-purple-50">
        {description}
      </p>
      {children}
    </Link>
  )
}

export default DetailCard
