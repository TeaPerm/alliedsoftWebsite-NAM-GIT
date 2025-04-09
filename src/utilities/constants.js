import placeholderPortrait from '@/images/clients/placeholder/placeholderPortrait.jpg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import { socialMediaProfiles } from '@/components/SocialMedia'
import silverStarMotors from '@/images/SilverStarMotors_logo.png'

export const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leader 1',
        role: 'Most important role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Leader 2',
        role: 'Important role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Leader 3',
        role: 'Software Engineer',
        image: { src: placeholderPortrait },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Name 1',
        role: 'Role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 2',
        role: 'Another role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 3',
        role: 'Some role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 4',
        role: 'Role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 5',
        role: 'Important role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 6',
        role: 'New Role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 7',
        role: 'Different role',
        image: { src: placeholderPortrait },
      },
      {
        name: 'Name 8',
        role: 'Unique role',
        image: { src: placeholderPortrait },
      },
    ],
  },
]

export const clients = [
  [
    'Daimler Truck AG',
    'https://companieslogo.com/img/orig/DTG.F_BIG-d09279ec.png?t=1720244491',
  ],
  [
    'Emil Frey Gruppe',
    'https://upload.wikimedia.org/wikipedia/de/0/03/Emil_Frey_Gruppe_logo.svg',
  ],
  [
    'Keyloop Global Inc',
    'https://cdn-images.am-online.com/thumbs/320x320/media/1/root/keyloop-logo-rgb-slate-hi-res-1.png',
  ],
  ['Silver Star Motors EAD', silverStarMotors],
]

export const navigation = (lng) => {
  return [
    {
      title: 'OurWork',
      links: [
        { title: 'Work1', href: `/${lng}/work/case-study-1` },
        { title: 'Work2', href: `/${lng}/work/case-study-2` },
        {
          title: 'See all →',
          href: `/${lng}/work`,
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'AboutUs', href: `/${lng}/about` },
        { title: 'OurServices', href: `/${lng}/services` },
        { title: 'Blog', href: `/${lng}/blog` },
        { title: 'ContactUs', href: `/${lng}/contact` },
      ],
    },
    {
      title: 'Connect',
      links: socialMediaProfiles,
    },
  ]
}
