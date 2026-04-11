export interface Location {
  name: string
  slug: string
  href: string
  priority: number
}

export interface Region {
  name: string
  slug: string
  description: string
  locations: Location[]
}

export const regions: Region[] = [
  {
    name: "London",
    slug: "london",
    description: "Pub website design and marketing services across London boroughs and postcodes.",
    locations: [
      { name: "London", slug: "london", href: "https://publandlord.com/pub-website-design-london", priority: 0.9 },
      { name: "Clerkenwell (EC1)", slug: "ec1-clerkenwell", href: "https://publandlord.com/pub-website-design-ec1-clerkenwell", priority: 0.7 },
      { name: "City of London (EC2)", slug: "ec2-city-london", href: "https://publandlord.com/pub-website-design-ec2-city-london", priority: 0.6 },
      { name: "Monument (EC3)", slug: "ec3-monument", href: "https://publandlord.com/pub-website-design-ec3-monument", priority: 0.6 },
      { name: "Fleet Street (EC4)", slug: "ec4-fleet-street", href: "https://publandlord.com/pub-website-design-ec4-fleet-street", priority: 0.6 },
      { name: "Bloomsbury (WC1)", slug: "wc1-bloomsbury", href: "https://publandlord.com/pub-website-design-wc1-bloomsbury", priority: 0.6 },
      { name: "Covent Garden (WC2)", slug: "wc2-covent-garden", href: "https://publandlord.com/pub-website-design-wc2-covent-garden", priority: 0.7 },
      { name: "Islington (N1)", slug: "n1-islington", href: "https://publandlord.com/pub-website-design-n1-islington", priority: 0.7 },
      { name: "Finsbury Park (N4)", slug: "n4-finsbury-park", href: "https://publandlord.com/pub-website-design-n4-finsbury-park", priority: 0.6 },
      { name: "Highbury (N5)", slug: "n5-highbury", href: "https://publandlord.com/pub-website-design-n5-highbury", priority: 0.6 },
      { name: "Highgate (N6)", slug: "n6-highgate", href: "https://publandlord.com/pub-website-design-n6-highgate", priority: 0.6 },
      { name: "Holloway (N7)", slug: "n7-holloway", href: "https://publandlord.com/pub-website-design-n7-holloway", priority: 0.5 },
      { name: "Crouch End (N8)", slug: "n8-crouch-end", href: "https://publandlord.com/pub-website-design-n8-crouch-end", priority: 0.6 },
      { name: "Muswell Hill (N10)", slug: "n10-muswell-hill", href: "https://publandlord.com/pub-website-design-n10-muswell-hill", priority: 0.6 },
      { name: "Stoke Newington (N16)", slug: "n16-stoke-newington", href: "https://publandlord.com/pub-website-design-n16-stoke-newington", priority: 0.7 },
      { name: "Archway (N19)", slug: "n19-archway", href: "https://publandlord.com/pub-website-design-n19-archway", priority: 0.5 },
      { name: "Whitechapel (E1)", slug: "e1-whitechapel", href: "https://publandlord.com/pub-website-design-e1-whitechapel", priority: 0.6 },
      { name: "Bethnal Green (E2)", slug: "e2-bethnal-green", href: "https://publandlord.com/pub-website-design-e2-bethnal-green", priority: 0.7 },
      { name: "Bow (E3)", slug: "e3-bow", href: "https://publandlord.com/pub-website-design-e3-bow", priority: 0.6 },
      { name: "Hackney (E8)", slug: "e8-hackney", href: "https://publandlord.com/pub-website-design-e8-hackney", priority: 0.7 },
      { name: "Walthamstow (E17)", slug: "e17-walthamstow", href: "https://publandlord.com/pub-website-design-e17-walthamstow", priority: 0.6 },
      { name: "Peckham (SE15)", slug: "se15-peckham", href: "https://publandlord.com/pub-website-design-se15-peckham", priority: 0.7 },
      { name: "Brixton (SW2)", slug: "sw2-brixton", href: "https://publandlord.com/pub-website-design-sw2-brixton", priority: 0.7 },
      { name: "Clapham (SW4)", slug: "sw4-clapham", href: "https://publandlord.com/pub-website-design-sw4-clapham", priority: 0.7 },
      { name: "Hammersmith (W6)", slug: "w6-hammersmith", href: "https://publandlord.com/pub-website-design-w6-hammersmith", priority: 0.6 },
      { name: "Notting Hill (W11)", slug: "w11-notting-hill", href: "https://publandlord.com/pub-website-design-w11-notting-hill", priority: 0.7 },
      { name: "Shepherd's Bush (W12)", slug: "w12-shepherds-bush", href: "https://publandlord.com/pub-website-design-w12-shepherds-bush", priority: 0.6 },
    ],
  },
  {
    name: "North of England",
    slug: "north",
    description: "Pub marketing services across Northern England including Manchester, Leeds, Liverpool, Newcastle, and Yorkshire.",
    locations: [
      { name: "Manchester", slug: "manchester", href: "https://publandlord.com/pub-marketing-manchester", priority: 0.9 },
      { name: "Leeds", slug: "leeds", href: "https://publandlord.com/pub-website-design-leeds", priority: 0.9 },
      { name: "Liverpool", slug: "liverpool", href: "https://publandlord.com/pub-website-design-liverpool", priority: 0.9 },
      { name: "Newcastle", slug: "newcastle", href: "https://publandlord.com/pub-website-design-newcastle", priority: 0.9 },
      { name: "Sheffield", slug: "sheffield", href: "https://publandlord.com/pub-website-design-sheffield", priority: 0.9 },
      { name: "York", slug: "york", href: "https://publandlord.com/pub-website-design-york", priority: 0.8 },
      { name: "Hull", slug: "hull", href: "https://publandlord.com/pub-website-design-hull", priority: 0.8 },
      { name: "Preston", slug: "preston", href: "https://publandlord.com/pub-website-design-preston", priority: 0.8 },
      { name: "Blackpool", slug: "blackpool", href: "https://publandlord.com/pub-website-design-blackpool", priority: 0.8 },
      { name: "Sunderland", slug: "sunderland", href: "https://publandlord.com/pub-website-design-sunderland", priority: 0.8 },
      { name: "Huddersfield", slug: "huddersfield", href: "https://publandlord.com/pub-website-design-huddersfield", priority: 0.8 },
      { name: "South Shields", slug: "south-shields", href: "https://publandlord.com/pub-website-design-south-shields", priority: 0.8 },
      { name: "Darlington", slug: "darlington", href: "https://publandlord.com/pub-website-design-darlington", priority: 0.7 },
      { name: "Oldham", slug: "oldham", href: "https://publandlord.com/pub-website-design-oldham", priority: 0.7 },
      { name: "Middlesbrough", slug: "middlesbrough", href: "https://publandlord.com/pub-website-design-middlesbrough", priority: 0.7 },
      { name: "Chester", slug: "chester", href: "https://publandlord.com/pub-website-design-chester", priority: 0.8 },
    ],
  },
  {
    name: "Midlands",
    slug: "midlands",
    description: "Pub website design and marketing across the Midlands including Birmingham, Nottingham, Leicester, and the surrounding areas.",
    locations: [
      { name: "Birmingham", slug: "birmingham", href: "https://publandlord.com/pub-marketing-birmingham", priority: 0.9 },
      { name: "Nottingham", slug: "nottingham", href: "https://publandlord.com/pub-website-design-nottingham", priority: 0.9 },
      { name: "Leicester", slug: "leicester", href: "https://publandlord.com/pub-website-design-leicester", priority: 0.8 },
      { name: "Coventry", slug: "coventry", href: "https://publandlord.com/pub-website-design-coventry", priority: 0.8 },
      { name: "Derby", slug: "derby", href: "https://publandlord.com/pub-website-design-derby", priority: 0.8 },
      { name: "Stoke-on-Trent", slug: "stoke-on-trent", href: "https://publandlord.com/pub-website-design-stoke-on-trent", priority: 0.7 },
      { name: "Shrewsbury", slug: "shrewsbury", href: "https://publandlord.com/pub-website-design-shrewsbury", priority: 0.8 },
      { name: "Wolverhampton", slug: "wolverhampton", href: "https://publandlord.com/pub-website-design-wolverhampton", priority: 0.7 },
      { name: "Worcester", slug: "worcester", href: "https://publandlord.com/pub-website-design-worcester", priority: 0.7 },
      { name: "Hereford", slug: "hereford", href: "https://publandlord.com/pub-website-design-hereford", priority: 0.7 },
      { name: "Stratford-upon-Avon", slug: "stratford-upon-avon", href: "https://publandlord.com/pub-website-design-stratford-upon-avon", priority: 0.7 },
      { name: "Northampton", slug: "northampton", href: "https://publandlord.com/pub-website-design-northampton", priority: 0.7 },
    ],
  },
  {
    name: "South of England",
    slug: "south",
    description: "Pub marketing services across Southern England including Bristol, Brighton, Southampton, and the South Coast.",
    locations: [
      { name: "Bristol", slug: "bristol", href: "https://publandlord.com/pub-website-design-bristol", priority: 0.9 },
      { name: "Brighton", slug: "brighton", href: "https://publandlord.com/pub-website-design-brighton", priority: 0.9 },
      { name: "Portsmouth", slug: "portsmouth", href: "https://publandlord.com/pub-website-design-portsmouth", priority: 0.9 },
      { name: "Norwich", slug: "norwich", href: "https://publandlord.com/pub-website-design-norwich", priority: 0.8 },
      { name: "Oxford", slug: "oxford", href: "https://publandlord.com/pub-website-design-oxford", priority: 0.8 },
      { name: "Southampton", slug: "southampton", href: "https://publandlord.com/pub-website-design-southampton", priority: 0.8 },
      { name: "Reading", slug: "reading", href: "https://publandlord.com/pub-website-design-reading", priority: 0.7 },
      { name: "St Albans", slug: "st-albans", href: "https://publandlord.com/pub-website-design-st-albans", priority: 0.8 },
      { name: "Cambridge", slug: "cambridge", href: "https://publandlord.com/pub-website-design-cambridge", priority: 0.8 },
      { name: "Canterbury", slug: "canterbury", href: "https://publandlord.com/pub-website-design-canterbury", priority: 0.7 },
      { name: "Exeter", slug: "exeter", href: "https://publandlord.com/pub-website-design-exeter", priority: 0.7 },
      { name: "Plymouth", slug: "plymouth", href: "https://publandlord.com/pub-website-design-plymouth", priority: 0.8 },
      { name: "Bath", slug: "bath", href: "https://publandlord.com/pub-website-design-bath", priority: 0.8 },
      { name: "Gloucester", slug: "gloucester", href: "https://publandlord.com/pub-website-design-gloucester", priority: 0.7 },
      { name: "Great Yarmouth", slug: "great-yarmouth", href: "https://publandlord.com/pub-website-design-great-yarmouth", priority: 0.7 },
    ],
  },
  {
    name: "Scotland",
    slug: "scotland",
    description: "Pub website design and marketing services across Scotland including Edinburgh, Glasgow, and beyond.",
    locations: [
      { name: "Edinburgh", slug: "edinburgh", href: "https://publandlord.com/pub-website-design-edinburgh", priority: 0.9 },
      { name: "Glasgow", slug: "glasgow", href: "https://publandlord.com/pub-website-design-glasgow", priority: 0.9 },
      { name: "Dundee", slug: "dundee", href: "https://publandlord.com/pub-website-design-dundee", priority: 0.7 },
      { name: "Aberdeen", slug: "aberdeen", href: "https://publandlord.com/pub-website-design-aberdeen", priority: 0.7 },
    ],
  },
  {
    name: "Wales",
    slug: "wales",
    description: "Pub marketing services across Wales including Cardiff, Swansea, Newport, and Welsh towns.",
    locations: [
      { name: "Cardiff", slug: "cardiff", href: "https://publandlord.com/pub-website-design-cardiff", priority: 0.9 },
      { name: "Swansea", slug: "swansea", href: "https://publandlord.com/pub-website-design-swansea", priority: 0.7 },
      { name: "Newport", slug: "newport", href: "https://publandlord.com/pub-website-design-newport", priority: 0.7 },
      { name: "Wrexham", slug: "wrexham", href: "https://publandlord.com/pub-website-design-wrexham", priority: 0.7 },
    ],
  },
  {
    name: "Northern Ireland",
    slug: "northern-ireland",
    description: "Pub website design and marketing services across Northern Ireland including Belfast and Derry.",
    locations: [
      { name: "Belfast", slug: "belfast", href: "https://publandlord.com/pub-website-design-belfast", priority: 0.9 },
      { name: "Derry", slug: "derry", href: "https://publandlord.com/pub-website-design-derry", priority: 0.7 },
    ],
  },
]

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug)
}

export function getAllLocations(): Location[] {
  return regions.flatMap((r) => r.locations)
}
