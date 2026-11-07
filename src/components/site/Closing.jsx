import { motion, useReducedMotion } from 'framer-motion'
import { LineHoverLink } from '@/components/ui/line-hover-link'
import RevealHeading from '@/components/site/RevealHeading'

const EASE = [0.16, 1, 0.3, 1]

const FOOTER_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Closing() {
  const reduce = useReducedMotion()

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 py-28 text-center md:px-8 md:py-44">
        <RevealHeading className="font-display text-[clamp(2.5rem,9.5vw,6rem)] font-extrabold uppercase tracking-tight md:text-8xl">
          Built to last.
        </RevealHeading>
        <motion.p
          initial={reduce ? false : { y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          General contracting and structural engineering for commercial, civil
          and industrial work.
        </motion.p>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-14 md:grid-cols-2 md:px-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
              <span aria-hidden="true" className="size-3 bg-primary" />
              <span className="font-display text-lg font-extrabold uppercase tracking-tight">
                Build
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              General contracting and structural engineering, delivered end to end.
            </p>
          </div>
          <nav className="flex flex-col items-start gap-3 md:items-end" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <LineHoverLink
                key={link.href}
                href={link.href}
                variant="slide"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </LineHoverLink>
            ))}
          </nav>
        </div>
        <div className="mx-auto flex w-full max-w-[1400px] items-center border-t border-border px-5 py-6 md:px-8">
          <span className="text-xs text-muted-foreground">
            Demo portfolio — sample content only
          </span>
        </div>
      </div>
    </footer>
  )
}
