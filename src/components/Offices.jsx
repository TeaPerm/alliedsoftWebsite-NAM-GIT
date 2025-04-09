import clsx from 'clsx'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'
import { Button } from './Button'

function ImpressumDialog() {
  return (
    <Dialog className="bg-white">
      <DialogTrigger asChild>
        <div className="w-min cursor-pointer">Impresszum</div>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white p-6 md:max-w-3xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold md:text-2xl">Impresszum</DialogTitle>
          <DialogDescription className="text-base md:text-lg">Allied Software Systems Kft.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 text-sm md:text-base">
          <div className="flex flex-col space-y-3">
            <InfoRow label="Adószám" value="13155870243" />
            <InfoRow label="Cégjegyzékszám" value="01 09 721424" />
            <InfoRow
              label="Teljes név"
              value="Allied Software Systems Informatikai, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság"
            />
            <InfoRow label="Jogi forma" value="Korlátolt Felelősségű Társaság (Kft.)" />
            <InfoRow label="Település" value="Budapest" />
            <InfoRow label="Székhely" value="1115 Budapest, Bartók Béla út 105-113." />
            <InfoRow
              label="Web cím"
              value={
                <a
                  href="http://www.alliedsoft.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  http://www.alliedsoft.hu/
                </a>
              }
            />
            <InfoRow label="Telefonszám" value="+36 1 6663737" />
            <InfoRow
              label="Email cím"
              value={
                <a
                  href="mailto:info@alliedsoft.hu"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  info@alliedsoft.hu
                </a>
              }
            />
            <InfoRow label="Fő tevékenység" value="6201. Számítógépes programozás" />
            <InfoRow label="Alapítás dátuma" value="2003.11.17." />
            <InfoRow label="Cégbíróság" value="Fővárosi Törvényszék Cégbírósága Budapest" />
            <InfoRow label="Kamarai tagság" value="Budapesti Kereskedelmi és Iparkamara" />
          </div>
        </div>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col space-y-1 md:flex-row md:space-y-0">
      <div className="font-bold md:w-1/3">{label}:</div>
      <div className="md:w-2/3">{value}</div>
    </div>
  )
} 

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-secondary',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-accent-950'}></strong>
      <br />
      {children}
      <div
        className={`mt-2 font-bold ${invert ? 'text-white' : 'text-accent-950'}`}
      >
        <ImpressumDialog />
      </div>
    </address>
  )
}

export function Offices({ invert = false, t, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Allied Software Systems Kft." invert={invert}>
          {t('AddressLine2')}
          <br />
          {t('AddressLine1')}
        </Office>
      </li>
      <li className="space-y-2">
        <div
          className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : 'text-secondary',
          )}
        >
          <strong className={invert ? 'text-white' : 'text-accent-950'}>
            {t('Phone')}
          </strong>
          <br />
          <a href="tel:+3619201550">+36 1-920-1550</a>
        </div>
        <div
          className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : 'text-secondary',
          )}
        >
          <strong className={invert ? 'text-white' : 'text-accent-950'}>
            {t('Fax')}
          </strong>
          <br />
          +36-1-6663799
        </div>
        <div
          className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : 'text-secondary',
          )}
        >
          <strong className={invert ? 'text-white' : 'text-accent-950'}>
            {t('Email')}
          </strong>
          <br />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alliedsoft.hu"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@alliedsoft.hu
          </a>
        </div>
      </li>
    </ul>
  )
}
