import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://localhost:3000/'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://localhost:3000/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://localhost:3000/pools'
  },
  {
    label: 'Oceans',
    icon: 'WaveIcon',
    href: 'http://localhost:3000/oceans',
  },
 /* {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://localhost:3000/lottery',
  }, */
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://dev.bitcoin.ne.kr',
  },
  {
    label: 'IDOs',
    icon: 'IdoIcon',
    href: 'http://localhost:3000/ido',
  },
//  {
//    label: 'Audited By Certik ✅',
//    icon: 'AuditIcon',
//    href: 'https://certik.org/projects/saltswap',
//  },
  {
    label: 'Price Graph',
    icon: 'GraphIcon',
    href: 'http://localhost:3000/graph',
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'http://cbdc.kr',
      },
      {
        label: 'CoinGecko',
        href: 'http://cbdc.kr',
      },
      {
        label: 'DappRadar',
        href: 'http://cbdc.kr',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'http://localhost:3000//lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: "Github",
        href: 'http://cbdc.kr',
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: 'http://cbdc.kr',
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: 'http://cbdc.kr',
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config
